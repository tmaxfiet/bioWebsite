import React from 'react';
import './ProjectCard.css';

import { Card } from 'react-bootstrap';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="project-card">
                <Card>
                    <Card.Img className="project-image" variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title> 
                            {this.props.name}
                        </Card.Title>
                        <div className="project-description" >
                            {this.props.description}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ProjectCard;