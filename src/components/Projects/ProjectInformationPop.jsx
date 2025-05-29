import TechnologyPill from "../Common/TechnologyPill";
import "./ProjectInformationPop.css";

function ProjectInformationPop({ project }) {
    return (
        <>
            <div className="project-information-pop">
                <p>{project.description}</p>
                { project.technologies && project.technologies.length > 0 && (
                    <div className="row justify-content-center border-top pt-3 mt-3">
                        {project.technologies.map((tech) => (
                            <TechnologyPill key={project.title + tech} technology={tech} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectInformationPop;