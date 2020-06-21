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
        console.log("HANDLING")
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
                    timeout={{
                        appear: 100,
                        enter: 100,
                        exit: 100,
                    }}
                    classNames="fade"
                    unmountOnExit
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
                                    <h3>{CONSTANTS.firstProjectName}</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                <Container>
                                    <Row>
                                        <Col md={6} sm={12} className="view-project-col">
                                            <div className="view-project-teaser"> 
                                                {CONSTANTS.firstProjectTeaser}
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
                                    src="./chatbot-pet.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>{CONSTANTS.secondProjectName}</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                    <Container>
                                        <Row>
                                            <Col md={6} sm={12} className="view-project-col">
                                                <div className="view-project-teaser"> 
                                                    {CONSTANTS.secondProjectTeaser} 
                                                </div>
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
                                    src="/checkers.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>{CONSTANTS.thirdProjectName}</h3>
                                    </Carousel.Caption>
                                </div>
                                <div className="carousel-item-banner">
                                    <Container>
                                        <Row>
                                            <Col md={6} sm={12} className="view-project-col">
                                                <div className="view-project-teaser"> 
                                                     {CONSTANTS.thirdProjectTeaser}
                                                </div>
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
                    timeout={{
                        appear: 100,
                        enter: 100,
                        exit: 100,
                    }}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="project-card-container">
                        <div onClick={this.handleGoBackProjectClick}>
                            <GoBackButton></GoBackButton>
                        </div>
                        <ProjectCard name={CONSTANTS.firstProjectName} description={CONSTANTS.firstProjectDescription}
                        how={CONSTANTS.firstProjectHow} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    key='secondProject'
                    in={this.state.whichProject === 'Second'}
                    timeout={{
                        appear: 100,
                        enter: 100,
                        exit: 100,
                    }}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="project-card-container">
                        <div onClick={this.handleGoBackProjectClick}>
                            <GoBackButton></GoBackButton>
                        </div>
                        <ProjectCard name={CONSTANTS.secondProjectName} description={CONSTANTS.secondProjectDescription} 
                        how={CONSTANTS.secondProjectHow} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    key='thirdProject'
                    in={this.state.whichProject === 'Third'}
                    timeout={{
                        appear: 100,
                        enter: 100,
                        exit: 100,
                    }}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="project-card-container">
                        <div onClick={this.handleGoBackProjectClick}>
                            <GoBackButton></GoBackButton>
                        </div>
                        <ProjectCard name={CONSTANTS.thirdProjectName} description={CONSTANTS.thirdProjectDescription} 
                        how={CONSTANTS.thirdProjectHow} />
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default ProjectComponent;