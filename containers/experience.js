import React from 'react';
import { experiences } from '../constants/experiences';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { LinkButtonRender, PageHeader } from './templates';

const Experience = (props) => {
    return (
        <Container className="experience view-div">
            <PageHeader header="Experience" />
            {experiences.map((exp, i) => {
                return (
                    <Card key={i} border="primary">
                        <Card.Header>
                            <b>{exp.name}</b>
                        </Card.Header>
                        <Card.Body>
                            <p className="gray-text">{exp.description}</p>

                            {exp.projects.map((project, j) => {
                                return (
                                    <ListGroup horizontal="lg" className="my-2" key={j}>
                                        <ListGroup.Item variant="primary" className="col-sm-2">
                                            {project.name}
                                        </ListGroup.Item>
                                        <ListGroup.Item variant="secondary" className="col-sm-9">
                                            {project.description}
                                        </ListGroup.Item>
                                        <ListGroup.Item variant="light">
                                            <LinkButtonRender />
                                        </ListGroup.Item>
                                    </ListGroup>
                                );
                            })}
                        </Card.Body>
                        <Card.Footer>
                            <small className="gray-text">{exp.duration}</small>
                        </Card.Footer>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Experience;
