import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { PageHeader } from './templates';
const InfoRender = (name, value) => {
    return (
        <Row>
            <Col sm={3}>
                <b>{name}</b>
            </Col>
            <Col>
                <label>{value}</label>
            </Col>
        </Row>
    );
};
const PatientInfoRender = () => {
    return (
        <>
            <Row>
                <Col>
                    <h5>
                        <Badge className="new-header" variant="primary">
                            Patient Information
                        </Badge>
                    </h5>
                </Col>
            </Row>
            {InfoRender('Name', 'S M Riasat Ali')}
            {InfoRender('Age / Gender', '27 Male')}
            {InfoRender('Height', '5 Ft 5.5 Inch')}
            {InfoRender('Weight', '68 KG')}
            {InfoRender('BMI', '24.6')}
            {InfoRender('BP', 'Normal')}
            {InfoRender('Case Study#', '')}
            <br />
        </>
    );
};
const HabitsRender = () => {
    return (
        <>
            <Row>
                <Col>
                    <h5>
                        <Badge className="new-header" variant="primary">
                            Healthy & Unhealthy Habits
                        </Badge>
                    </h5>
                </Col>
            </Row>
            {InfoRender('Exercise', 'No exercise for last 1 month. Before that, 2-3 times at a gym basic workout.')}
            {InfoRender('Diet', 'No planned diet, just whatever is cooked at home. No control/measurement.')}
            {InfoRender('Smoking History', 'Never')}
            {InfoRender('Caffeine Consumption', '1-3 times tea/black coffee/milk coffee without sugar')}
            {InfoRender('Alcohol Consumption', 'Never')}
            {InfoRender('Others', 'Sitting for too long due to job. Sometimes have to keep awake late night due to office pressure.')}
            <br />
        </>
    );
};
const HistoryRender = () => {
    return (
        <>
            <Row>
                <Col>
                    <h5>
                        <Badge className="new-header" variant="primary">
                            Patient Medical History
                        </Badge>
                    </h5>
                </Col>
            </Row>
            {InfoRender('Drug allergies', 'None.')}
            {InfoRender('Other illness', 'Pre-diabetes (5.7-5.8 Blood sugar), Fatty lever(grade 1), Vitamine D deficiency.')}
            {InfoRender('Previous operation', 'None')}
            {InfoRender('Current Medication', '1 Vitamine D capsule per month.')}
            <br />
        </>
    );
};
const CauseRender = () => {
    return (
        <>
            <Row>
                <Col>
                    <h5>
                        <Badge className="new-header" variant="primary">
                            Reason For Seeing The Doctor
                        </Badge>
                    </h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="gray-text">
                        I have a huge belly fat and a lot of fat on other places. I have almost 32% body fat. I want to decrease body fat into less than 20%, gain muscle and be healthy and stronger
                        within 6 months. But I want the process to be very sustainable. My final goal is to get a six-pack and get good sportsman muscle after 1 year.
                    </p>
                </Col>
            </Row>
            <br />
        </>
    );
};
const Test = (props) => {
    return (
        <Container>
            <PageHeader header="Case History Information" />
            <PatientInfoRender />
            <HabitsRender />
            <HistoryRender />
            <CauseRender />
        </Container>
    );
};
export default Test;
