import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Image,
	Button,
	Accordion,
	Card,
} from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useRouter } from "next/router";

// import { withRouter } from 'react-router-dom';

import { MenuItems } from "../constants/menu-items";
const Menu = (props) => {
	const router = useRouter();
	const [activePage, setActivePage] = useState("");
	const gotoPage = (name, path) => {
		setActivePage(name);
		router.push(path);
	};
	useEffect(() => {
		const url = window.location.pathname;
		setActivePage(url.split("/")[1]);
	}, []);
	// console.log("activePage: ", activePage);
	const decorateAccordionToggle = (eventKey) => {
		return useAccordionButton(eventKey);
	};
	return (
		<>
			<Accordion defaultActiveKey="0" className="side-menu-phone">
				<Card>
					<Card.Header onClick={decorateAccordionToggle("1")}>
						<CustomToggle eventKey="1">MENU</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<Image
								src="/images/riasat-ali.jpeg"
								alt="Riasat Ali"
								width="100%"
								thumbnail
							/>
							<br />
							<br />
							{MenuItems.map((item, i) => {
								return (
									<Button
										size="sm"
										variant={
											item.name === activePage
												? "primary"
												: "outline-primary"
										}
										className="menu-btn"
										key={item.id}
										onClick={() => {
											gotoPage(item.name, item.path);
										}}
									>
										<Row>
											<Col>{item.label}</Col>
										</Row>
									</Button>
								);
							})}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>

			<Container className="side-menu">
				<Row>
					<Col>
						<Image
							src="/images/riasat-ali.jpeg"
							alt="Riasat Ali"
							width="100%"
							thumbnail
						/>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						{MenuItems.map((item, i) => {
							return (
								<Button
									size="sm"
									variant={
										item.name === activePage
											? "primary"
											: "outline-primary"
									}
									className="menu-btn"
									key={item.id}
									onClick={() => {
										gotoPage(item.name, item.path);
									}}
								>
									<Row>
										{/* <Col>{item.icon}</Col> */}
										<Col>{item.label}</Col>
									</Row>
								</Button>
							);
						})}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Menu;

const CustomToggle = ({ children, eventKey }) => {
	const decoratedOnClick = useAccordionButton(eventKey, () =>
		console.log("totally custom!")
	);

	return (
		<div
			type="button"
			style={{ width: "100%", textAlign: "center" }}
			onClick={decoratedOnClick}
		>
			{children}
		</div>
	);
};
