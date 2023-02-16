import React from 'react';
import { education, certificates } from '../constants/educations';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { PageHeader, LinkButtonRender } from './templates';

const Education = (props) => {
    return (
        <Container className="education view-div">
            <PageHeader header="Education" />

            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <b>{education.name}</b>
                        </Col>
                        <Col className="right-text">
                            {education.institute}&nbsp;
                            <small>({education.address})</small>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {education.description}
                        <br />

                        {education.courses.map((course, i) => {
                            return <Badge variant="primary badge">{course.name}</Badge>;
                        })}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{education.duration}</small>
                </Card.Footer>
            </Card>
            <div style={{ height: 50 }} />

            <PageHeader header="Certificates" />
            {certificates.map((cert, i) => {
                return (
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col sm={9}>{cert.name}</Col>
                                <Col sm={3}>
                                    <small className="text-muted">{cert.duration}</small>
                                </Col>
                            </Row>
                        </Card.Header>
                    </Card>
                );
            })}
        </Container>
    );
};

export default Education;
