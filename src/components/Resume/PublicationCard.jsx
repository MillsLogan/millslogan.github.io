import LinkButton from "../Common/LinkButton";
import { useState } from "react";

export default function PublicationCard({ title, authors, date, venue, link, abstract, tags }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleAbstract = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="card publication-card mb-4">
        <div className="card-header">
            <h5 className="card-title">{title}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <h6 className="card-subtitle mb-2 text-muted">{venue}</h6>
                <span className="text-muted">{date}</span>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text"><strong>Authors:</strong> {authors.join(", ")}</p>
            {abstract && (
                <div className="abstract-container">
                    <p className={`card-text abstract ${isExpanded ? "expanded" : ""}`}>
                        <strong>Abstract:</strong> {abstract.length > 200 && (
                        isExpanded ? abstract : `${abstract.substring(0, 200)}...`
                    )}
                    <LinkButton
                        variant="ghost-underline"
                        to="#resume"
                        onClick={toggleAbstract}
                        className="toggle-abstract">
                        {isExpanded ? "Show Less" : "Read More"}
                    </LinkButton>
                    </p>
                    
                    
                </div>
            )}
        
        </div>
            
        {link && (
            <LinkButton variant="primary" to={link} external={true} className="mx-5 mb-3">
                View Publication
            </LinkButton>
        )}
         <div className="card-footer">
            {tags && tags.length > 0 && (
            <div className="publication-tags">
            {tags.map((tag, index) => (
                <span key={index} className="badge bg-accent fs-6 me-1 mb-1">{tag}</span>
            ))}
         </div>
        
        )}
        </div>
        </div>
    );
}