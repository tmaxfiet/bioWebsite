import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* My Components */
import NavBarComponent from './Components/Navbar/NavBarComponent';
import PhotoJumbtron from './Components/PhotoJumbotron/PhotoJumbotron';
import ProjectComponent from './Components/Project/ProjectComponent';
import ContactFormComponent from './Components/ContactForm/ContactFormComponent';
import TextSectionComponent from './Components/TextSection/TextSectionComponent';

/* My Constants */
import { photoJumbtronPath } from './Settings/constants';

function App() {
  return (
    <div className="App">
      <div>
        <NavBarComponent brand="Taylor Maxfield"></NavBarComponent>
      </div>
      <div id="home">
        <PhotoJumbtron background={photoJumbtronPath}> </PhotoJumbtron>
      </div>
      <div id="about">
        <TextSectionComponent></TextSectionComponent>
      </div>
      <div id="projects">
        <ProjectComponent></ProjectComponent>
      </div>
      <div id="contact">
        <ContactFormComponent></ContactFormComponent>
      </div>
    </div>
  );
}

export default App;
