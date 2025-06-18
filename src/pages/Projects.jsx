import projectsData from '../data/projects.json';
import ProjectCard from '../components/Projects/ProjectCard';
import './Projects.css';
import Searchbar from '../components/Searchbar';
import { useState } from 'react';

function Projects() {
    const projects = projectsData.projects;
    const [searchValue, setSearchValue] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(projects.reverse());
    

    function searchProjects(newSearchValue) {
        setSearchValue(newSearchValue);
        setFilteredProjects(projects.filter((project) => {
            return project.title.toLowerCase().includes(searchValue) || 
            project.description.toLowerCase().includes(searchValue) ||
            project.technologies.join(" ").toLowerCase().includes(searchValue) ||
            project.tags.join(" ").toLowerCase().includes(searchValue);
        }));
    }

    return(
        <div className="projects py-5" style={{width: "100%"}} id="projects">
            {projects[0].title}
            <div className="container">
                <h2 className="display-4 fw-bold text-center mb-5"  style={{width: "100%"}}>Projects</h2>
                <Searchbar 
                searchValueCallback={searchProjects}/>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    { filteredProjects.map((project) => {
                        return (
                            <div key={project.title} className="col">
                                <ProjectCard project={project} />
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Projects;