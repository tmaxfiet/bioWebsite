import React from 'react';
import './ProjectComponent.css';
import ProjectCard from '../ProjectCard/ProjectCard';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

import Carousel from 'react-bootstrap/Carousel';
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
                            <Carousel.Item onClick={this.handleFirstProjectClick}>
                                <img
                                className="d-block w-100"
                                src="/logo512.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item onClick={this.handleSecondProjectClick}>
                                <img
                                className="d-block w-100"
                                src="/logo512.png"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item onClick={this.handleThirdProjectClick}>
                                <img
                                className="d-block w-100"
                                src="/logo512.png"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
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