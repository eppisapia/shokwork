import React from 'react';
import Section from './sections/Section';
/**
 * This should be in an Index
 */
import HomeSection from './sections/Home';
import AboutSection from './sections/About';
import PortfolioSection from './sections/Portfolio';
import StakeholderSection from './sections/Stakeholders';
import CommentsSection from './sections/Comments';

export default function Home() {

    return (
        <div>
            <HomeSection id="homeSection" />
            <AboutSection id="aboutSection" />
            <PortfolioSection id="portfolioSection" />
            <StakeholderSection id="stakeholdersSection" />
            <CommentsSection id="commentsSection" />
        </div>

    );
}