import LinkButton from "../Common/LinkButton";
import "./ExperienceCard.css";

function ExperienceCard({ position, company, startDate, endDate=null, description, responsibilities=[], skills=[] }) {
  return (
    <>
        <div className="mb-3 card experience-card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{position}</h5>
                    <span className="text-muted">{startDate} - {endDate || "Present"}</span>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
            </div>
            <div className="card-body">
                
                <p className="card-text">{description}</p>
                <LinkButton variant="primary" to={`#${position.split(" ")[0]}-responsibilities`} external={false} data-bs-toggle="collapse" className="mb-2">Expand Responsibilities</LinkButton>
                {responsibilities.length > 0 && (
                    <div className="collapse" id={`${position.split(" ")[0]}-responsibilities`}>
                        <ul className="list-group list-group-flush">
                            {responsibilities.map((task, index) => (
                                <li key={index} className="list-group-item">{task}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="card-footer">
                {skills.length > 0 && (
                    <div className="skills">
                        <strong>Skills:</strong>
                        <ul className="list-inline fs-5">
                            {skills.map((skill, index) => (
                                <li key={index} className="list-inline-item badge bg-accent">{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default ExperienceCard;