import './Home.css'
import portrait from '/src/assets/cover2.jpeg'

function Home() {
    return (
        <section className="hero-section">
            <section className="hero py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-4 fw-bold mb-3">Hi, I'm <br/><span className="hero-name">Logan Mills</span></h1>
                            <p className="lead text-muted mb-4">
                                I'm a passionate computer science student at the <span style={{color: "#E57200", fontWeight: "bold"}}>University of Virginia</span>, graduating with a <strong className='hero-strong'>Master’s in Fall 2025</strong>. I specialize in <strong className='hero-strong'>machine learning</strong> and <strong className='hero-strong'>natural language processing</strong>, with experience in building innovative projects that blend creativity and technical expertise.
                            </p>
                            <div>
                                <a href="#projects" className="btn btn-secondary btn-lg me-2" id="hero-projects-button">View My Projects</a>
                                <a href="#contact" className="btn btn-outline-info btn-lg me-2" id="hero-contact-button">Get in Touch</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center mt-5 mt-lg-0">
                            <img src={portrait} alt="Picture of Logan Mills" className="img-fluid rounded-circle shadow"/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export default Home

