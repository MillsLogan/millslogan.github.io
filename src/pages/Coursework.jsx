import UVALogo from '../assets/uva-logo.png';
import COURSES from '../data/coursework.json';
import CourseCard from '../components/Course/CourseCard';
import DegreeCard from '../components/Course/DegreeCard';

function Coursework() {
    const displayedCourses = COURSES.courses.map((course) => 
        <div className="col">
            <CourseCard
                title={course.title}
                courseCode={course.courseCode}
                courseLevel={course.courseLevel}
                description={course.description}
                skills={course.skills}
                term={course.term}
                technologies={course.technologies}
            />    
        </div>)

    return (
        <div className="pb-5 pt-2">
        <div className="container text-center p-4 rounded shadow-sm">
            
            <div className="container mb-4 pb-4 border-bottom">
                <div className="p-3">
                    <h2 className="display-4">Coursework</h2>
                    <p>
                        I'm currently pursuing an <strong>M.C.S. (Master of Computer Science)</strong> degree at the University of Virginia graduating in <strong>Fall 2025</strong>.
                    </p>
                </div>
                <div className="row">
                    <DegreeCard 
                        degreeTitle="B.S. in Computer Science"
                        university="University of Virginia"
                        school="School of Engineering and Applied Science"
                        graduationYear="2025"
                        gpa="3.90"
                        distinctionNote="Graduated with Highest Distinction"
                    />
                    <DegreeCard
                        degreeTitle="M.C.S. - Master of Computer Science"
                        university="University of Virginia"
                        school="School of Engineering and Applied Science"
                        graduationYear="Expected: Fall 2025"
                        gpa="4.00"
                        distinctionNote={null}
                    />
                </div>
                <p>
                    Below is a selection of courses I've completed as part of my undergraduate and graduate programs. Each card includes the course title, description, skills gained, and technologies or tools used where applicable.
                </p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {displayedCourses}
            </div>
        </div>
        </div>
    );
}

export default Coursework;