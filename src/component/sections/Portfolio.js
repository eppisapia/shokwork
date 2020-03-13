import React from 'react';
import './Sections.css'

export default function PortfolioSection({ id }) {
    return (
        <div id={id}>
            <Image style={{ width: "50%", minWidth: "350px" }} src="https://www.sector7apps.com/wp-content/uploads/2019/08/how-to-build-a-mobile-app-from-the-ground-up.jpg" />
            <h2> What is the <span>Speciality Of Us?</span></h2>
        </div>
    )

}
