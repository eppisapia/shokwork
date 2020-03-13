import React from 'react';
import './Sections.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewsApi } from '../../services/actions';
import PortfolioCard from '../PortfolioCard';

class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        this.props.actions.newsApi("", this.onSuccess, this.onError)
    }

    onSuccess = (data) => {
        this.setState({ list: [...new Set([...this.state.list, ...data.data.sources])] })
    }

    onError = (e) => {
        console.log("ERROR AL CONSUMIER EL SERVICIO", e)
    }

    render() {
        return (
            <div id={this.props.id}>
                <h3>What is the <span>Speciality of Us?</span></h3>
                <PortfolioCard imgUrl="https://i.pinimg.com/736x/e7/96/0a/e7960a0ca60318c52c48d7081f964fe7.jpg" id="1" title="potato" text="asdadsadas" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            newsApi: bindActionCreators(getNewsApi, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSection);


