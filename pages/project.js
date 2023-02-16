import React from "react";
import { projects } from "../constants/projects";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { PageHeader, LinkButtonRender } from "../components/templates";

const Project = (props) => {
	return (
		<Container className="project view-div">
			<PageHeader header="Project" />
			{projects.map((project, i) => {
				return (
					<Card key={i} border="primary">
						<Card.Header>
							<Row>
								<Col>
									<b>{project.name}</b>
								</Col>
								<Col>{project.link}</Col>
							</Row>
						</Card.Header>
					</Card>
				);
			})}
		</Container>
	);
};

export default Project;
