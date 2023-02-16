import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { PageHeader, LinkButtonRender } from "../components/templates";
import ContestProgrammingComponent from "../components/activities/contests-programming";
const Activity = (props) => {
	return (
		<Container className="activity-container view-div">
			<PageHeader header="Activity" />
			<ContestProgrammingComponent />
		</Container>
	);
};

export default Activity;
