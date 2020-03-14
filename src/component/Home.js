import React from 'react';
/**
 * This should be in an Index
 */
import { Container } from 'react-bootstrap';
import HomeSection from './sections/Home';
import AboutSection from './sections/About';
import PortfolioSection from './sections/Portfolio';
import StakeholderSection from './sections/Stakeholders';
import CommentsSection from './sections/Comments';
import Contact from './sections/Contact';

export default function Home() {

    return (
        <div>
            <HomeSection id="homeSection" />
            <AboutSection id="aboutSection" />
            <PortfolioSection id="portfolioSection" />
            <StakeholderSection id="stakeholdersSection" />
            <CommentsSection id="commentsSection" />
            <Contact id="contactSection" />
        </div>

    );
}