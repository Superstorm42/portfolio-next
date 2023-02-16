import React, { Component } from "react";
import Menu from "../containers/menu";
import { Container, Row, Col, Navbar, Alert } from "react-bootstrap";

class Layout extends Component {
	render() {
		return (
			<div className="background-page">
				<Navbar bg="primary" expand="lg">
					<Container>
						<Row>
							<Col sm={6}>
								<Navbar.Brand
									href="/"
									style={{ color: "white" }}
								>
									S M Riasat Ali
								</Navbar.Brand>
							</Col>
						</Row>
					</Container>
				</Navbar>

				<Alert variant="danger" className="center-text">
					THE SITE IS STILL UNDER CONSTRUCTION!
				</Alert>

				<Container className="full-page">
					<Row>
						<Col sm={3}>
							<Menu />
						</Col>

						<Col sm={9}>
							<div className="main-page">
								{this.props.children}
							</div>
						</Col>
					</Row>
				</Container>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
const Footer = (props) => {
	return (
		<Container>
			<Row>
				<Col className="center-text">Thank You For Visiting!</Col>
			</Row>
		</Container>
	);
};
export default Layout;
