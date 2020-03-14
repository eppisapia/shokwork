import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/Comments.css';

export default function CommentItem({ name, email, body }) {
    return (
        <Container className="commentItem commentCol">
            <p>{body}</p>
            <h5>{name}</h5>
            <label>{email}</label>
        </Container>
    )
}    