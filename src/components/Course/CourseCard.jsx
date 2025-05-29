import "./CourseCard.css";

const GRADUGRAD_COLORS = {
    "Undergraduate": "",
    "Graduate": ""
}

const MISSING_ICONS = {
    "lean": "icons/lean.png",
    "wireshark": "icons/wireshark.png"
}


function CourseCard({ title, courseCode, description, skills, courseLevel, technologies, term }) {
    return (
        <>
            <div className={`card shadow-lg h-100 course-card mb-1 ${GRADUGRAD_COLORS[courseLevel]}`}>
                <div className="card-header pt-4">
                    <div className="badge bg-secondary-subtle text-secondary mb-1 term-badge">
                        {term}
                    </div>
                    <div className={`badge ${courseLevel === "Undergraduate" ? "bg-primary" : "bg-success"} text-dark mb-1 grad-level-badge`}>
                        {courseLevel}
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{courseCode}</h6>
                </div>
                <div className="d-flex justify-content-center card-body">
                    {technologies.map((technology) => {
                        return (
                            <div className="col-auto mt-1 mx-2 bg-subtle px-2 pt-1 rounded" key={technology}>
                                {(MISSING_ICONS[technology]) ? <img src={MISSING_ICONS[technology]} alt={technology}style={{width: "auto", height: "2rem"}} /> :
                                technology === "tensorflow" ? <i className="devicon-tensorflow-original m-auto" style={{fontSize: "2rem"}}></i> :
                                <i className={`devicon-${technology}-plain m-auto`} style={{fontSize: "2rem"}}></i>
                         } </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CourseCard;