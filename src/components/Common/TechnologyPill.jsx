import TechnologyInfo from "../../data/technology.json";

function TechnologyPill({ technology }) {
    const TECH_INFO = TechnologyInfo[technology];

    if (!TECH_INFO) {
        console.warn(`Technology ${technology} not found in TechnologyInfo.`);
        return null; // or return a default component
    } else if (!TECH_INFO.hasDevIcon) {
        return (
            <div className="col align-items-center justify-content-center m-1 nowrap">
                <img src={TECH_INFO.image} alt={TECH_INFO.name} style={{ width: "1.5rem", height: "1.5rem" }} />
                <span className="ms-2 text-capitalize">{TECH_INFO.name}</span>
            </div>
        );
    }
    return (
        <div className="col align-items-center justify-content-center m-1">
            <i className={`devicon-${technology}-plain colored`} style={{ fontSize: "1.5rem" }}></i>
            <span className="ms-2 text-capitalize">{TECH_INFO.name}</span>
        </div>
    )
}

export default TechnologyPill;