import React from 'react'
import { Container, Form, Button, Col, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postJsonApi } from '../../services/actions';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                problem: "",
                text: ""
            },
            show: false,
            modalText: ""
        };
    }

    onSuccess = (data) => {
        console.log("SUCCESS", data)
        this.setState({ show: true })
    }

    onError = (e) => {
        console.log("ERROR AL CONSUMIER EL SERVICIO", e)
    }

    handleChange(event) {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        this.setState({ form: { ...this.state.form, [fieldName]: fieldVal } })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.form)
        let body = {
            title: this.state.form.firstName,
            body: this.state.form.text,
            userId: 1
        }
        this.props.actions.jsonApi("", body, this.onSuccess, this.onError)
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    render() {
        const { show } = this.state
        return (
            <Container className="p-0 contactContainer" id={this.props.id} fluid>
                <h2>Facing Problem?</h2>
                <h2><span>Lets Get In Touch Now</span></h2>
                <div className="formContainer">
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Group controlId="form">
                            <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="firstName" placeholder="First name" onChange={this.handleChange.bind(this)} />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="lastName" placeholder="Last name" onChange={this.handleChange.bind(this)} />
                                </Col>
                            </Form.Row>

                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange.bind(this)} />

                            <Form.Label>Which Relating Problem You Are Facing</Form.Label>
                            <Form.Control name="problem" as="select" onChange={this.handleChange.bind(this)}>
                                <option>Select One</option>
                                <option>Select Two</option>
                            </Form.Control>

                            <Form.Label>Type Your Message</Form.Label>
                            <Form.Control name="text" as="textarea" rows="3" onChange={this.handleChange.bind(this)} />
                        </Form.Group>

                        <Button className="secondaryButton" type="submit">
                            Our Works
                        </Button>
                    </Form>
                </div>

                <Modal show={show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Post Created</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Post Created</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            jsonApi: bindActionCreators(postJsonApi, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
