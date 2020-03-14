import React from 'react';
import { Container } from 'react-bootstrap';
export default function AboutSection({ name, email, body }) {
    return (
        <Container className="commentItem commentCol">
            <p>{body}</p>
            <h5>{name}</h5>
            <label>{email}</label>
        </Container>
    )
}    