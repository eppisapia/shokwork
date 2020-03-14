import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../assets/Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <Container fluid className="footerContainer">
            <h1>SHOKWORKS</h1>
            <Row>
                <Col xs={3}>
                    <div className="footerList">
                        <h5>Contact Us</h5>
                        <div>
                            <Image style={{ width: 15 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                            <label> +(1) 824-5428 </label>
                        </div>
                        <div>
                            <Image style={{ width: 15 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                            <label> Miami, United States </label>
                        </div>
                        <div>
                            <Image style={{ width: 15 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                            <label> yfuentes@shokworks.com </label>
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="footerList">
                        <h5>Our Company</h5>
                        <Link activeClass="active" to="aboutSection" spy={true} smooth={true} offset={-70}
                            duration={500}> About </Link>
                        <Link activeClass="active" to="portfolioSection" spy={true} smooth={true} offset={-70}
                            duration={500}> Portfolio </Link>
                        <Link activeClass="active" to="stakeholdersSection" spy={true} smooth={true} offset={-70}
                            duration={500}> Career </Link>
                        <Link activeClass="active" to="commentsSection" spy={true} smooth={true} offset={-70}
                            duration={500}> Blog </Link>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="footerList">
                        <h5>Social Contacts</h5>
                        <label>Facebook</label>
                        <label>LinkedIn</label>
                        <label>Youtube</label>
                        <label>Vimeo</label>
                        <label>Skype</label>
                    </div>

                </Col>
                <Col xs={3}>
                    <Row>
                        <div className="footerList">
                            <h5>Address</h5>
                            <p>Internet Systems Consorium, Inc 95 Charter Stree Redwood City, CA. USA</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="footerList">
                            <h5>Follow Us</h5>
                            <div className="footerIconRow">
                                <Image style={{ width: 25 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                                <Image style={{ width: 25 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                                <Image style={{ width: 25 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                                <Image style={{ width: 25 }} src="https://www.pngkey.com/png/detail/195-1957052_contact-us-comments-contact-icon-png.png" />
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}