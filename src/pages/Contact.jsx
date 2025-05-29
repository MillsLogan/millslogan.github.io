import './Contact.css'
import ContactCard from '../components/ContactCard';

function Contact() {
    return (
        <>
            <div className="container-fluid text-center justify-content-center">
                <div className="d-flex" style={{flexDirection: "column", justifyContent: "space-between", minHeight: "92vh"}}>
                    <h1 className="display-4 fw-bold mt-5">Get in Touch</h1>
                    <p className="lead">
                        I'd love to hear from you! Feel free to reach out to me on any of my social media platform.
                    </p>
                    <p className="lead">
                        Or if you prefer, you can send me an email at <br></br> <a className="btn btn-primary mt-2" href="mailto:&#109;&#105;&#108;&#108;&#115;&#108;&#111;&#103;&#097;&#110;&#050;&#048;&#048;&#051;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#109;&#105;&#108;&#108;&#115;&#108;&#111;&#103;&#097;&#110;&#050;&#048;&#048;&#051;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                    </p>
                    <div className="container-fluid my-auto">
                        <div className="row row-col-1 justify-content-between text-center">
                            <ContactCard contactLink={"https://github.com/millslogan"} contactIcon={<i className="devicon-github-plain"></i>}  contactText="Check out my projects on Github"/>
                            <ContactCard contactLink={"https://www.linkedin.com/in/logan-r-mills/"} contactIcon={<i className="devicon-linkedin-plain"></i>} contactText="Connect with me on LinkedIn" />
                            <ContactCard contactLink={"https://www.youtube.com/@LoganMills49"} contactIcon={<i className="fa-brands fa-youtube"></i>} contactText="Check out my content on YouTube" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact;

