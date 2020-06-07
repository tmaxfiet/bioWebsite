import React from 'react';
import './HomeComponent.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <div id="home-component">
                <h1 id="home-header" > Welcome to my humble website! </h1>
                <p id="home-description">
                    This is a bio website to highlight my skillset, some projects I have been working on, 
                    and contact information for yours truly. Stay awhile; enjoy messing around with the website.
                    Please <a href="#contact"> reach out </a> if you are interesting in connecting to 
                    create something together.
                </p>
            </div>
        )
    }
}

export default HomeComponent;