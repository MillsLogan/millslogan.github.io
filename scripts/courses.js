var courses = {"data": null};

function setupCourses(data){
    this.data = data.terms;
    let rowContainer = $('#course-terms-list');
    for (let term of this.data.reverse()){
        rowContainer.append(makeTerm(term));
    }
}

function makeTerm(term){
    let container = $("<div>").addClass("row semester-container");
    let title = $("<h2>").text(term.season + " " + term.year).addClass("display-4");
    container.append(title);
    container.append($("<hr>"));

    let listContainer = $("<div>").addClass("col-lg-4");
    container.append(listContainer);

    let listGroup = $("<div>").addClass("list-group");
    listContainer.append(listGroup);

    for (let course of term.courses){
        listGroup.append(makeCourseLink(course));
    }

    listGroup.children().first().addClass("active");

    let tabContainer = $("<div>").addClass("col-lg-8");
    container.append(tabContainer);

    let tabContent = $("<div>").addClass("tab-content");
    tabContainer.append(tabContent);
    for (let course of term.courses){
        tabContent.append(makeCourseDescription(course));
    }

    tabContent.children().first().addClass("show active");

    return container;
}

function makeCourseLink(course){
    let courseItem = $("<a>").addClass("list-group-item list-group-item-action").attr("id", "list-" + course.information.department + course.information.number + "-list");
    courseItem.attr("data-bs-toggle", "list").attr("href", "#list-" + course.information.department + course.information.number).attr("role", "tab").attr("aria-controls", course.information.department + course.information.number);
    courseItem.text(course.information.title);
    return courseItem;
}

function makeCourseDescription(course){
    let container = $("<div>").addClass("tab-pane fade").attr("id", "list-" + course.information.department + course.information.number).attr("role", "tabpanel").attr("aria-labelledby", "tab-" + course.information.department + course.information.number);
    let title = $("<h4>").text(course.information.department + " " + course.information.number + ": " + course.information.title);
    let description = $("<p>").text(course.description);
    container.append(title, $("<hr>"), description);
    return container;
}

$.getJSON("data/courses.json", setupCourses.bind(courses));

