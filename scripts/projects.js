
function setupProjects(data){
    let rowContainer = $('#projects-list');
    for (let project of data.projects){
        let container = $("<div>").addClass("col-lg-4");
        let card = $("<div>").addClass("card");
        let cardBody = $("<div>").addClass("card-body");
        let image = $("<img>").addClass("card-img-top").attr("src", project.image).attr("alt", project.title);
        let title = $("<h1>").addClass("card-title").text(project.title);
        let line = $("<hr>");
        let description = $("<p>").addClass("card-text").text(project.description);
        let github = $("<a>").addClass("btn btn-primary").attr("href", project.github).text("GitHub");
        if(project.showcase){
            let demo = $("<a>").addClass("btn btn-primary", "float-right").attr("href", project.demo).text("Demo");
            cardBody.append(image, title, line, description, github, demo);
        } else {
            cardBody.append(image, title, line, description, github);
        }
        card.append(cardBody);
        container.append(card);
        rowContainer.append(container);
    }
}






let projects = $.getJSON("data/projects.json", setupProjects);

