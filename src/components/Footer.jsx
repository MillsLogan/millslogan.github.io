import LinkButton from "./Common/LinkButton";

export default function Footer() {
    return (
        <div className="bg-dark border-top mt-5">
            <div className="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5"> 
                <div class="col mb-3"> 
                    <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap"> 
                        <p>Logan Mills © 2025</p> 
                    </a>
                </div> 
                <div class="col mb-3">
                </div> 
                <div class="col mb-3 text-center"> 
                    <h5>Pages</h5> 
                    <ul class="nav flex-column"> 
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" to="#home">Home</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" to="#about">About</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" to="#projects">Projects</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" to="#contact">Contact</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" to="#resume">Resume</LinkButton></li>
                    </ul> 
                </div>
                <div class="col mb-3 text-center"> 
                    <h5>Social Links</h5> 
                    <ul class="nav flex-column"> 
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" external={true} to="https://www.linkedin.com/in/logan-r-mills/"><i className="devicon-linkedin-plain"></i> LinkedIn</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" external={true} to="https://www.github.com/millslogan"><i className="devicon-github-plain"></i> GitHub</LinkButton></li>
                        <li class="nav-item mb-2"><LinkButton variant="ghost-underline" external={true} to="https://www.youtube.com/@LoganMills49"><i className="fa-brands fa-youtube"></i> YouTube</LinkButton></li>
                        
                    </ul> 
                </div> 
            </footer>
        </div>
        </div>
        
        
    )
}