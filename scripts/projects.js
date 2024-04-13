var projects = {"data": null};


function setupProjects(data){
    let rowContainer = $('#projects-list');
    for (let project of data.projects){
        rowContainer.append(makeProjectCard(project));
    }
    this.data = data.projects;
}

function makeProjectCard(project){
    let link = $("<a>").attr("href", project.github).addClass("card-link");
    let container = $("<div>").addClass("col-lg-4");
    let card = $("<div>").addClass("card");
    let cardBody = $("<div>").addClass("card-body");
    let title = $("<h1>").addClass("card-title").text(project.title);
    let line = $("<hr>");
    let description = $("<p>").addClass("card-text").text(project.description);
    if(project.showcase){
        let demo = $("<a>").addClass("btn btn-primary").attr("href", project.showcase).text("Demo");
        cardBody.append(title, line, description, demo);
    } else {
        cardBody.append(title, line, description);
    }
    card.append(cardBody);
    link.append(card);
    container.append(link);
    return container;
}


function filter(){
    let search = $('#search-filter').val();
    let filtered = projects.data.filter((project) => filterMatch(search, project));
    let rowContainer = $('#projects-list');
    rowContainer.empty();
    for (let project of filtered){
        rowContainer.append(makeProjectCard(project));
    }
}

function filterMatch(search, project){
    if(project.title.toLowerCase().includes(search.toLowerCase())){
        return true;
    }

    if(project.description.toLowerCase().includes(search.toLowerCase())){
        return true;
    }

    for(let tag of project.tags){
        if(tag.toLowerCase().includes(search.toLowerCase())){
            return true;
        }
    }
}


$.getJSON("data/projects.json", setupProjects.bind(projects));





$('#search-filter-button').click(filter);
$('#search-filter').on('input', filter);

