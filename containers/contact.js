import React from 'react';
import { contact } from '../constants/contact';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageHeader } from './templates';
const Contact = (props) => {
    return (
        <Container className="contact view-div">
            <PageHeader header="Contact" />
            {contact.map((con, i) => {
                return (
                    <Row key={con.id}>
                        <Col sm="6">
                            <Button className="contact-btn" size="sm">
                                <Row>
                                    <Col className="btn-icon">{con.icon}</Col>
                                    <Col>{con.path}</Col>
                                </Row>
                            </Button>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
};

export default Contact;
