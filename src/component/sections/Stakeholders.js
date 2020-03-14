import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../../assets/Stakeholders.css';

export default function StakeholderSection({ id }) {
    return (
        <Container id={id} fluid className="stakeholderContainer">
            <h2> {'Our Partners & Clients'}</h2>
            <Row >
                <Col xs={4}>
                    <Row>
                        <div className="stakeholderCard">
                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title>IMMERSITY</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="stakeholderCard">
                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title><span>MEX</span>PERIENCIA</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Col>
                <Col xs={4} style={{ marginTop: -20 }}>
                    <Row>
                        <div className="stakeholderCard">
                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title>WIFIPASS</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="stakeholderCard">
                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title>MOBILE</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Col>
                <Col xs={4}>
                    <Row>
                        <div className="stakeholderCard">
                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title>KINESIS</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="stakeholderCard">

                            <Card className="stakeholderCard">
                                <Card.Img className="stakeholderImage" variant="top" src="https://i.ya-webdesign.com/images/company-icon-png-4.png" />
                                <Card.Body>
                                    <Card.Title>GOOD TIMES</Card.Title>
                                    <label>Learn More</label>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}