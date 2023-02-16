import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
export const PageHeader = (props) => {
    return (
        <>
            <Row>
                <Col>
                    <h3>{props.header}</h3>
                </Col>
            </Row>
            <hr />
        </>
    );
};
export const LinkButtonRender = (props) => {
    return (
        <Button size="sm" variant="outline-primary">
            <BiLinkExternal />
        </Button>
    );
};
