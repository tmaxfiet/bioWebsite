import React from 'react';
import './ProjectComponent.css';
import ProjectCard from '../ProjectCard/ProjectCard';

import { CSSTransition } from 'react-transition-group';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import GoBackButton from '../GoBackButton/GoBackButton';

// Constants for project text 
import * as CONSTANTS from '../../Settings/constants';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            whichProject: 'None'
        }

        this.handleGoBackProjectClick = this.handleGoBackProjectClick.bind(this);
        this.handleFirstProjectClick = this.handleFirstProjectClick.bind(this);
        this.handleSecondProjectClick = this.handleSecondProjectClick.bind(this);
        this.handleThirdProjectClick = this.handleThirdProjectClick.bind(this);
    }

    handleGoBackProjectClick() {
        console.log('GO BACk')
        this.setState({
            whichProject: 'None'
        })
    }

    handleFirstProjectClick() {
        this.setState({
            whichProject: 'First'
        })
    }

    handleSecondProjectClick() {
        this.setState({
            whichProject: 'Second'
        })
    }

    handleThirdProjectClick() {
        this.setState({
            whichProject: 'Third'
        })
    }

    render() {
        return(
            <div id="project-component">
                <CSSTransition
                    key='noProject'
                    in={this.state.whichProject === 'None'}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => console.log('enter')}
                    onExited={() => console.log('exit')}
                > 
                    <div id="project-carousel-container">
                        <Carousel id="project-carousel">
                            <Carousel.Item>
                                <div className="carousel-item-container">
                                    <img
                                    className="d-block w-100 carousel-img"
                                    src="./study-noise-teaser.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Study Noise</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                <Container>
                                    <Row>
                                        <Col md={6} sm={12} className="view-project-col">
                                            <div className="view-project-teaser"> 
                                                A web app that uses Spotify's API to fetch 
                                                songs and create a tailored visual to each. 
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                    <button className="view-project-button" 
                                    onClick={this.handleFirstProjectClick}> View Project </button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item-container">
                                    <img
                                    className="d-block w-100 carousel-img"
                                    src="./book.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Therapy Chatbot</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                    <Container>
                                        <Row>
                                            <Col md={6} sm={12} className="view-project-col">
                                                <div className="view-project-teaser"> TEASER TEXT </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <button className="view-project-button" onClick={this.handleSecondProjectClick}> View Project </button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item-container">
                                    <img
                                    className="d-block w-100 carousel-img"
                                    src="/book.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Ultimate Checkers</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                    <Container>
                                        <Row>
                                            <Col md={6} sm={12} className="view-project-col">
                                                <div className="view-project-teaser"> A modern twist on checkers with items and special
                                            tiles such as sandtraps and bombs! </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <button className="view-project-button" onClick={this.handleThirdProjectClick}> View Project </button>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </CSSTransition>
                <CSSTransition
                    key='firstProject'
                    in={this.state.whichProject === 'First'}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => console.log('enter')}
                    onExited={() => console.log('exit')}
                >
                    <div className="project-card-container" onClick={this.handleGoBackProjectClick}>
                        <GoBackButton></GoBackButton>
                        <ProjectCard name={CONSTANTS.firstProjectName} description={CONSTANTS.firstProjectDescription} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    key='secondProject'
                    in={this.state.whichProject === 'Second'}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => console.log('enter')}
                    onExited={() => console.log('exit')}
                >
                    <div className="project-card-container" onClick={this.handleGoBackProjectClick}>
                        <GoBackButton ></GoBackButton>
                        <ProjectCard name={CONSTANTS.secondProjectName} description={CONSTANTS.secondProjectDescription} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    key='thirdProject'
                    in={this.state.whichProject === 'Third'}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => console.log('enter')}
                    onExited={() => console.log('exit')}
                >
                    <div className="project-card-container" onClick={this.handleGoBackProjectClick}>
                        <GoBackButton></GoBackButton>
                        <ProjectCard name={CONSTANTS.thirdProjectName} description={CONSTANTS.thirdProjectDescription} />
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default ProjectComponent;