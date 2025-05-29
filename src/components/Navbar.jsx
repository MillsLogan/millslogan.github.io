import "./Navbar.css";
import { renderPage } from "../main";
import { useState, useEffect } from "react";
import LinkButton from "./Common/LinkButton";

function Navbar() {
    const [activeTab, setActiveTab] = useState("#home");

    useEffect(() => {
        setActiveTab(window.location.hash || "#home");

        const handleHashChange = () => {
            setActiveTab(window.location.hash || "#home");
            renderPage();
        }

        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            
        };
    }, []);

    const tabs = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "#resume" }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
            <div className="container mx-5">
                <a className="navbar-brand" href="#">
                    Logan Mills
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>    
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { tabs.map((tab) => {
                            return (
                                <li key={tab.name} className="nav-item mx-2">
                                    <LinkButton isActive={activeTab === tab.href} to={tab.href} className="nav-link" variant="ghost-outline" onClick={() => setActiveTab(tab.href)}>
                                        {tab.name}
                                    </LinkButton>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;