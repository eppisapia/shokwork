import React from 'react';
import PortfolioCard from '../PortfolioCard';
import './Sections.css'

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    render() {
        return (
            <React.Fragment id={this.props.id}>
                <h3>What is the <span>Speciality of Us?</span></h3>
                <PortfolioCard imgUrl="https://i.pinimg.com/736x/e7/96/0a/e7960a0ca60318c52c48d7081f964fe7.jpg" id="1" title="potato" text="asdadsadas" />
            </React.Fragment>
        );
    }
}

