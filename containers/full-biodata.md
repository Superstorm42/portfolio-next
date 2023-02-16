import React from 'react';
import ReactToPdf from 'react-to-pdf';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
const ref = React.createRef();

const options = {
    orientation: 'portrait',
};
const FullBiodata = (props) => {
    return (
        <div>
            <ReactToPdf targetRef={ref} filename="riasat-ali.pdf" options={options} scale={1}>
                {({ toPdf }) => <Button onClick={toPdf}>Generate pdf</Button>}
            </ReactToPdf>
            <hr />
            <Container ref={ref} className="bio-data">
                <GapDiv />
                <Row>
                    <Col sm={3}>
                        <Image src="/images/riasat-ali.jpeg" alt="Riasat Ali" width="100%" thumbnail />
                    </Col>
                    <Col sm={9}>RIASAT ALI</Col>
                </Row>
            </Container>
        </div>
    );
};
const GapDiv = () => {
    return <div style={{ height: 30 }} />;
};
export default FullBiodata;
