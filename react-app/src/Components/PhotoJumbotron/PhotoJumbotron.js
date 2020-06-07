import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './PhotoJumbotron.css';

class PhotoJumbtron extends React.Component {

    render() {
        if (this.props.background) {
            return (
                <Jumbotron id="photo-jumbotron" style={{ backgroundImage: `url("${this.props.background}")` }}>
                    <h1 id="photo-jumbotron-header" className="photo-jumbotron-text"> Welcome to my humble website! </h1>
                    <h4 id="photo-jumbotron-description" className="photo-jumbotron-text">
                        This is a bio website to highlight my skillset, some projects I have been working on, 
                        and contact information for yours truly. Stay awhile; enjoy messing around with the website.
                        Please <a href="#contact"> reach out </a> if you are interesting in connecting to 
                        create something together.

                    </h4>
                </Jumbotron>
            )
        } else {
            return (
                <Jumbotron id="photo-jumbotron">
                    <h1> Welcome to my humble website! </h1>
                    <h6 id="photo-jumbotron-text">
                        This is a bio website to highlight my skillset, some projects I have been working on, 
                        and contact information for yours truly. Stay awhile; enjoy messing around with the website. 
                        Please <a href="#contact"> reach out </a> if you are interesting in connecting to 
                        create something together.

                    </h6>
                    <p>
                        Hello extra. 
                    </p>
                </Jumbotron>
            )
        }
    }
}

export default PhotoJumbtron;