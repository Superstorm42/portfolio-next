import React from "react";
import { skills } from "../constants/skills";
import {
	Container,
	Row,
	Col,
	Button,
	CardColumns,
	Card,
	ProgressBar,
} from "react-bootstrap";
import { PageHeader, LinkButtonRender } from "../components/templates";
const RenderSkill = (props) => {
	const { name, point, description } = props.skill;
	// console.log(
	// 	"🚀 ~ file: skill.js ~ line 6 ~ RenderSkill ~ name, point, description",
	// 	name,
	// 	point,
	// 	description
	// );
	return (
		<Row>
			<Col sm={3} className="right-text">
				<b>{name}</b>
			</Col>
			<Col sm={9}>
				<ProgressBar now={point} variant="primary" />
				<p className="gray-text">{description}</p>
			</Col>
		</Row>
	);
};
const Skill = (props) => {
	return (
		<Container className="skill view-div">
			<PageHeader header="Skills" />
			{skills.map((skill) => {
				return (
					<Card bg="active" key={skill.id} className="card">
						<Card.Header style={{ textAlign: "left" }}>
							<b>{skill.category}</b>
						</Card.Header>
						<Card.Body>
							{skill.skills.map((sk, i) => {
								// console.log(sk);
								return <RenderSkill skill={sk} key={i} />;
							})}
						</Card.Body>
					</Card>
				);
			})}
		</Container>
	);
};

export default Skill;
