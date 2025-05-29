function ProjectModal({project}) {
    const idTitle = project.title.replace(/\s+/g, '');
    return (
        <div className="modal fade hide" id={idTitle + "Modal"} tabIndex="-1" aria-labelledby={idTitle} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id={idTitle + "ModalLabel"}>
                            {project.title}
                        </h3>
                    </div>
                    <div className="modal-body">
                        <img src={project.image} className="img-fluid rounded" alt={project.title} />
                        <p className="mt-3">{project.description}</p>
                        <h4>Technologies</h4>
                        <div className="d-flex justify-content-center">
                            {project.technologies.map((technology) => {
                                return (
                                    <div className="mx-2" key={technology}>
                                        <i className={`devicon-${technology}-plain colored m-auto`} style={{fontSize: "2rem"}}></i>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href={project.githubLink} className="btn col btn-secondary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            <a href={project.demoLink} className="btn col btn-primary m-2" target="_blank" rel="noreferrer">Demo</a>
                            <a href={project.writeup} className="btn col btn-info m-2" target="_blank" rel="noreferrer">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;