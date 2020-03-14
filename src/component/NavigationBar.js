import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";

export default function NavigationBar() {
    return (
        <Navbar expand="lg" className="myNavigationBar">
            <Navbar.Brand href="/">ShokWork</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link activeClass="active" to="homeSection" spy={true} smooth={true} offset={-70}
                        duration={500}> Home </Link>
                    <Link activeClass="active" to="aboutSection" spy={true} smooth={true} offset={-70}
                        duration={500}> About </Link>
                    <Link activeClass="active" to="portfolioSection" spy={true} smooth={true} offset={-70}
                        duration={500}> Portfolio </Link>
                    <Link activeClass="active" to="stakeholdersSection" spy={true} smooth={true} offset={-70}
                        duration={500}> Career </Link>
                    <Link activeClass="active" to="commentsSection" spy={true} smooth={true} offset={-70}
                        duration={500}> Blog </Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className="primaryButton">
                        <Link activeClass="active" to="contactSection" spy={true} smooth={true} offset={-70}
                            duration={500}> Contact Us </Link>
                    </Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    )

}