import "./ProjectCard.css";
import ProjectModal from "./ProjectModal";
import ProjectInformationPop from "./ProjectInformationPop";

function ProjectCard({ project }) {
    return (
        <div>
            <div className="card project-card mb-4" data-bs-toggle="modal" data-bs-target={"#" + project.title.replace(/\s+/g, '') + "Modal"}>
                <div className="card-header">
                    <h2 className="card-title">{project.title}</h2>
                </div>
                <div className="card-body">
                    <img src={project.image} className="card-img" alt={project.title} />
                    <ProjectInformationPop project={project} />
                </div>
            </div>
            <ProjectModal project={project} />
        </div>
    )
}





export default ProjectCard;