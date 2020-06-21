import React from 'react';
import './ProjectCard.css';

import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="project-card">
                <Card border="dark">
                    <Card.Header> {this.props.name} </Card.Header>
                    <Card.Body className="project-card-body">
                        <Container className="project-card-flex">
                            <Row>
                                <Col md={6} sm={12}>
                                    <Card className="how-card">
                                        <Card.Title> 
                                            How does it work? 
                                        </Card.Title>
                                        <div className="project-how" >
                                            {this.props.how}
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Card className="what-card">
                                        <Card.Title> 
                                            What is the purpose?
                                        </Card.Title>
                                        <div className="project-description" >
                                            {this.props.description}
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ProjectCard;