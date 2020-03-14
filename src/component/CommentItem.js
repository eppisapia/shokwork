import React from 'react';

export default function AboutSection({ name, email, body }) {
    return (
        <div className="commentItem commentCol">
            <p>{body}</p>
            <h5>{name}</h5>
            <label>{email}</label>
        </div>
    )
}    