import './App.css'
import HomePage from './pages/Home.jsx'
import ProjectsPage from './pages/Projects.jsx'
import ContactPage from './pages/Contact.jsx'
import CourseWorkPage from './pages/Coursework.jsx'
import ResumePage from './pages/Resume.jsx'
import { useState, useEffect } from 'react';
import React from 'react';
import AboutPage from './pages/AboutPage.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || "home");

  

  return (
    <>
      <div className="page-container container">
        <div className="content-wrap" style={{width: "100%"}}>
          {getPage()}
        </div>
      </div>
      <Footer />
    </>
  )
}

function getPage() {
  const currentPage = window.location.hash.slice(1) || "home"; 

    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      case "coursework":
        return <CourseWorkPage />;
      case "resume":
        return <ResumePage />;
      default:
        return <HomePage />;
    }
  }

export default App;
