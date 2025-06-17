import LinkButton from "../Common/LinkButton";
import "./ExperienceCard.css";

export default function EducationCard({ degree, university, school, completeDate, distinction=null, relavantCourses=null, gpa, completed=true, transcriptLink="/undergradTranscript.pdf" }) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{degree} - {university}</h5>
                        <span className="text-muted">{completed ? "Graduated:" : "Expected:"} {completeDate}</span>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{university} - {school}</h6>
                </div>
                <div className="card-body">
                    {relavantCourses && (
                        <p className="card-text">
                            <strong>Relevant Courses:</strong> {relavantCourses.map((course, index) => (
                                <span key={index} className="badge bg-accent mx-1">{course}</span>
                            ))}
                        </p>
                    )}
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        {gpa && <p className="card-text my-auto"><strong>GPA:</strong> {gpa}<small className="text-muted">/4.0</small></p>}
                        {distinction && <p className="card-text my-auto"><strong>Distinction:</strong> {distinction}</p>}
                        <LinkButton variant="ghost-outline" to={transcriptLink} external={true}>
                            View Transcript
                        </LinkButton>
                    </div>
                </div>

            </div>
        </>
    );
}