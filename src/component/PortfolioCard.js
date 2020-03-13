import React from 'react';
import { Image } from 'react-bootstrap';

export default function PortfolioCard({ id, imgUrl, title, text }) {
    return (
        <div className="portfolioCard">
            <Image roundedCircle style={{ width: "150px" }} src={imgUrl} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )

}