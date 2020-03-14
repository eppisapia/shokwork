import React from 'react';
import { Image, Button, Container } from 'react-bootstrap';
import './Sections.css'

export default function HomeSection({ id }) {
    return (
        <Container id={id} className="p-0">
            {/**
             * Used style in Image for basic responsive and keep Bootstrap inner styles
             */}
            <Image style={{ width: "50%", minWidth: "350px" }} src="https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg" />
            <h1 style={{ width: "25%", minWidth: "330px" }}>A Brand New Way To See The World</h1>
            <div>
                <Button className="primaryButton" >Our Works</Button>
                <Button className="secondaryButton">Know More</Button>
            </div>
        </Container>
    )

}
