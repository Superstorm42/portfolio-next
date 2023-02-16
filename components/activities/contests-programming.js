import React from "react";
import { programmingContest } from "../../constants/activities";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
const ContestProgrammingComponent = (props) => {
	return (
		<Card>
			<Card.Header>
				<Row>
					<Col>
						<b>{programmingContest.name}</b>
					</Col>
				</Row>
			</Card.Header>
			<Card.Body>
				<Card.Text className="justify-text gray-text">
					{programmingContest.description}
					<br />
					<br />
					{programmingContest.profiles.map((profile) => {
						return (
							<>
								<Button
									className="contact-btn"
									size="sm"
									onClick={() => {
										window.open(profile.link, "_blank");
									}}
								>
									<Row>
										<Col className="btn-icon" sm={3}>
											{profile.name}
										</Col>
										<Col sm={9} className="right-text">
											{profile.link}
										</Col>
									</Row>
								</Button>
							</>
						);
					})}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default ContestProgrammingComponent;
