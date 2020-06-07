import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* My components */
import NavBarComponent from './Components/Navbar/NavBarComponent';
import PhotoJumbtron from './Components/PhotoJumbotron/PhotoJumbotron';
import ProjectCarousel from './Components/ProjectCarousel/ProjectCarousel';
import ContactFormComponent from './Components/ContactForm/ContactFormComponent';
import HomeComponent from './Components/Home/HomeComponent';

function App() {
  return (
    <div className="App">
      <div>
        <NavBarComponent brand="Taylor Maxfield"></NavBarComponent>
      </div>
      <div id="home"></div>
        <HomeComponent></HomeComponent>
      <div id="about">
        <PhotoJumbtron id="about" background="/home-office.jpg"> </PhotoJumbtron>
      </div>
      <div id="projects">
        <ProjectCarousel id="projects"></ProjectCarousel>
      </div>
      <div id="contact">
        <ContactFormComponent></ContactFormComponent>
      </div>
    </div>
  );
}

export default App;
