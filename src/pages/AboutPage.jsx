import portait from "../assets/cover.jpeg";
import research from "../assets/portrait.jpeg";
import vinny from "../assets/vinny.JPG";
import Valerie from "../assets/valerie.JPG";

export default function AboutPage() {
    return (
        <div className="about-page">
            <h1 className="mt-5">About Me</h1>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-9">
                    <p className="fs-5">
                        Hi! I’m a recent Computer Science graduate with a passion for research, machine learning, and language — both human and artificial. My journey into CS started the way it does for many: a deep love for video games and the curiosity to understand what made them tick. That initial spark grew into a broader fascination with how code can shape systems, solve problems, and, eventually, learn from data.
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={portait} alt="Logan Mills" className="img-fluid rounded-circle shadow mb-3" />
                    <p className="text-muted">My graduation photos!</p>
                </div>
            </div>
            
            <h2 className="mt-5">Research & Interests</h2>
            <div className="row justify-content-center align-items-center">
                <div className="col col-md-3 text-center">
                    <img src={research} alt="Logan Mills" className="img-fluid rounded-circle shadow mb-3" />
                    <p className="text-muted">Presenting at ABRCMS</p>
                </div>
                <div className="col-md-9">
                    <p className="fs-5">
                        During my undergraduate years at VCU, I discovered my love for machine learning through hands-on research in the Natural Language Processing (NLP) lab. There, I had the chance to explore the intersection of computation and language, working on projects that taught me how to think critically about data, models, and their applications in the real world.
                    </p>
                    <p className="fs-5">
                        These days, I’m especially interested in machine learning for structured data (like graphs and sequences), research tooling, and building intuitive systems that make complex ideas accessible.
                    </p>
                </div>
            </div>
            
            <h2 className="mt-5">Outside of Code</h2>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <p className="fs-5">
                         When I'm not writing or debugging code, I'm likely spending time with my two cats, Vinny and Valerie. Vinny is a Siberian brown tabby who’s always ready to supervise a late-night coding session, while Valerie is a sleek black cat with a curious streak and a white spot on her chest. (Yes, there will be pictures.)
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={vinny} alt="Vinny the cat" style={{width: "100%", height: "0", paddingBottom: "100%", backgroundImage: "url(vinny.JPG)", backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPositionX: "50%"}} className="img-fluid rounded-circle shadow mb-3" />
                    <p className="text-muted">Vinny, my coding buddy</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={Valerie} alt="Valerie the cat" style={{width: "100%", height: "0", paddingBottom: "100%", backgroundImage: "url(valerie.JPG)", backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPositionX: "50%"}} className="img-fluid rounded-circle shadow mb-3" />
                    <p className="text-muted">Valerie, the curious one</p>
                </div>
            </div>
        </div>
    );
}