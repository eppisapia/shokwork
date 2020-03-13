import React, { Component } from "react";
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
                    <Nav.Link>
                        <Link activeClass="active" to="homeSection" spy={true} smooth={true} offset={-70}
                            duration={500}> Home </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70}
                            duration={500}> About </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70}
                            duration={500}> Portfolio </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70}
                            duration={500}> Career </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="section5" spy={true} smooth={true} offset={-70}
                            duration={500}> Blog </Link>
                    </Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className="primaryButton">Contact Us</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )

}