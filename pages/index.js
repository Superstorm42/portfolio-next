import React from "react";
import { introduction, contact } from "../constants/introductions";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageHeader } from "../components/templates";
const Introduction = (props) => {
	// console.log(props);
	return (
		<Container className="introduction view-div">
			<PageHeader header="Introduction" />
			<Row>
				<Col>
					<h4>{introduction.name}</h4>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<h5>{introduction.designation}</h5>
				</Col>
				<Col md={6} style={{ textAlign: "right" }}>
					<small>[{introduction.address}]</small>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="gray-text justify-text">
						{introduction.about}
					</p>
				</Col>
			</Row>
			<div style={{ height: 50 }} />
			<PageHeader header="Contact" />
			{contact.map((con, i) => {
				return (
					<Row key={con.id}>
						<Col>
							<Button
								className="contact-btn"
								size="sm"
								onClick={() => {
									window.open(con.link, "_blank");
								}}
							>
								<Row>
									<Col className="btn-icon" sm={3}>
										{con.icon}
									</Col>
									<Col sm={9} className="right-text">
										{con.path}
									</Col>
								</Row>
							</Button>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
};

export default Introduction;
