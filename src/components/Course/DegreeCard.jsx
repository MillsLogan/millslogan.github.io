function DegreeCard({ degreeTitle, university, school, graduationYear, gpa, distinctionNote=null}) {
    return (
        <div className="col-md-6 mb-4 degree-card">
            <div className="card h-100 shadow-sm bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">{degreeTitle}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{university}</h6>
                    <p className="mb-1">{school}</p>
                    <p className="mb-1"><strong>Graduated:</strong> {graduationYear}</p>
                    <p className="mb-0"><strong>GPA:</strong> {gpa}<small>/4.00</small></p>
                    {distinctionNote && <p className="mb-0 text-success"><em>{distinctionNote}</em></p>}
                </div>
            </div>
        </div>
    )
}

export default DegreeCard;