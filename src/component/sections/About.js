import React from 'react'
import { Image, Button, Container, Row, Col } from 'react-bootstrap';
import '../../assets/About.css';

export default function AboutSection({ id }) {
    return (
        <Container id={id} fluid>
            <Row>
                <Col xs={6} className="aboutInfo">
                    <h3>The Process</h3>
                    <h3>About Our Work</h3>
                    <p>Alejandro Laplana leads and adaptable end-to-end development team constisting of a large partion of captable enterprise mixed reality solutions.</p>
                    <Button className="secondaryButton" href="/about"> Know More </Button>
                </Col>
                <Col xs={6}>
                    <Image rounded style={{ width: "70%", minWidth: "350px" }} src="https://i.pinimg.com/736x/e7/96/0a/e7960a0ca60318c52c48d7081f964fe7.jpg" />
                </Col>
            </Row>
            <Row className="aboutItem">
                <Col xs={6}>
                    <Image rounded style={{ width: "70%", minWidth: "350px" }} src="https://miro.medium.com/max/735/1*8n62ILtnDXljOQePecL6KQ.png" />
                </Col>
                <Col xs={6} className="aboutInfo">
                    <h3>We are here to</h3>
                    <h3><span>allways help</span> you</h3>
                    <p>Shokworks team provide solutions and guidance to every project, taking the project vision to high level.</p>
                </Col>
            </Row>
        </Container>
    )
}