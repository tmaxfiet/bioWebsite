import React from 'react';
import './TextSectionComponent.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TextSectionComponent extends React.Component {
    render() {
        return (
            <div id="text-section-component">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <Image src="./book.jpg" id="text-image" fluid  rounded/>
                        </Col>
                        <Col lg={6} md={12}>
                            <h1 id="text-section-header" > Just who is this guy? </h1>
                            <p id="text-section-description">
                                I am a nerd with a computer science degree from the University of Southern California
                                (obligatory Fight On! <span role="img" aria-label="fight-on-emoji">✌️</span>). I discovered my passion for front end development through 
                                my various clubs and projects I participated in while at school. So it only made 
                                sense to major in something I loved doing! I aim to create every component with some 
                                fun flair so please, stay awhile and enjoy messing around with the website.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default TextSectionComponent;