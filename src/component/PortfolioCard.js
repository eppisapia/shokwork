import React from 'react';
import { Image } from 'react-bootstrap';

export default function PortfolioCard({ id, imgUrl, title, text }) {
    return (
        <div id={id}>
            <Image roundedCircle style={{ width: "30%", minWidth: "200px" }} src={imgUrl} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )

}