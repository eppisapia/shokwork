import React from 'react';
import { Image } from 'react-bootstrap';

export default class PortfolioCard extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
    }

    handleClick = () => {
        const compRef = document.getElementById(this.props.id);
        compRef.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }

    validateText() {
        const regex = new RegExp(/(\b\%[0-9]+\b)/, 'g');
        return regex.test(this.props.text) ? "Invalid Text" : this.props.text
    }

    render() {
        return (
            <div className="portfolioCard" id={this.props.id} ref={this.props.id} onClick={() => this.handleClick()}>
                <Image roundedCircle style={{ width: "180px", height: "180px" }} src={this.props.imgUrl} />
                <label>{this.props.title}</label>
                <p>{this.validateText()}</p>
            </div>
        )
    }
}