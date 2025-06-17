import "./Resume.css";
import LinkButton from "../components/Common/LinkButton";
import EducationCard from "../components/Resume/EducationCard";
import ExperienceCard from "../components/Resume/ExperienceCard";
import experience from "../data/experience.json";
import PublicationCard from "../components/Resume/PublicationCard";
import publications from "../data/publications.json";

function Resume() {
  return (
    <div className="resume-page pb-5 pt-2">
      <div className="container text-center">
        <h1 className="display-4">Logan Mills</h1>
        <h2 className="text-muted">Charlottesville, VA</h2>
        <div className="row justify-content-center">
          {/* Name and contact info on left column */}
          <div className="col-md-3">
            <h3 className="text-center">Contact Information</h3>
            <div className="resume-contact-info row">
              <div className="col-12">
                <strong>Email</strong><br/><LinkButton variant="ghost-underline" to="mailto:&#109;&#105;&#108;&#108;&#115;&#108;&#111;&#103;&#097;&#110;&#050;&#048;&#048;&#051;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#109;&#105;&#108;&#108;&#115;&#108;&#111;&#103;&#097;&#110;&#050;&#048;&#048;&#051;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</LinkButton>
              </div>
              <div className="col-12">
                <strong>LinkedIn</strong><br/><LinkButton variant="ghost-underline" to="https://www.linkedin.com/in/logan-r-mills/" external={true}>linkedin.com/in/logan-r-mills</LinkButton>
              </div>
              <div className="col-12">
                <strong>GitHub</strong><br/><LinkButton to="github.com/millslogan" variant="ghost-underline" external={true}> github.com/millslogan</LinkButton>
              </div>
              <div className="col-12">
                <strong>Download PDF Version</strong><br/>
                <LinkButton variant="ghost-underline" to="/Resume.pdf" external={true}>Download Resume</LinkButton>
              </div>
            </div>
          </div>
          {/* Main content on right column */}
          <div className="col-md-9 border-start text-start">
            <h2 className="border-bottom">Objective</h2>
            <p>Aspiring Machine Learning researcher and Computer Science student with lab experience in deep learning, seeking a role that leverages my background in AI and strong foundation in Python, TensorFlow, and data-driven problem solving.</p>

            <h2 className="border-bottom">Education</h2>
            <EducationCard degree="Master of Computer Science" gpa={"4.0"} university={"University of Virginia"} school={"School of Engineering and Applied Science"} completeDate="12/25" relavantCourses={["Machine Learning", "Machine Learning on Graphs", "Dependable Computing Systems", "Advanced Embedded Systems"]} completed={false}/>
            <EducationCard degree="Bachelor of Science in Computer Science" gpa={3.9} university="University of Virginia" school="School of Engineering and Applied Science" completeDate="05/25" relavantCourses={["Artificial Intelligence", "Machine Learning", "Internet Scale Applications"]} distinction={"Summa Cum Laude"}/>
            <h2 className="border-bottom">Experience</h2>
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                position={exp.position}
                company={exp.company}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                responsibilities={exp.responsibilities}
                skills={exp.skills}
              />
            ))}
            <h2 className="border-bottom">Publications</h2>
            {publications.map((pub, index) => (
              <PublicationCard
                key={index}
                title={pub.title}
                authors={pub.authors}
                date={pub.year}
                venue={pub.venue}
                link={pub.link}
                abstract={pub.abstract}
                tags={pub.tags}
              />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;