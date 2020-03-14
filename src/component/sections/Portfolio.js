import React from 'react';
import './Sections.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNewsApi } from '../../services/actions';
import PortfolioCard from '../PortfolioCard';
import { Button } from 'react-bootstrap';

class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selected: 1
        };
    }

    componentDidMount() {
        this.props.actions.newsApi(this.onSuccess, this.onError)
    }

    onSuccess = (data) => {
        this.setState({ list: [...new Set([...this.state.list, ...data.data.articles])] })
    }

    onError = (e) => {
        console.log("ERROR AL CONSUMIER EL SERVICIO", e)
    }

    onClick = (index) => {
        if (index >= this.state.list.length) {
            index = this.state.list.length - 1;
        }
        if (index < 0) index = 0;
        this.setState({ selected: index })

        const compRef = document.getElementById("item" + index);

        compRef.scrollIntoViewIfNeeded({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    }

    render() {
        const { selected, list } = this.state;
        return (
            <div id={this.props.id}>
                <h3>What is the <span>Speciality of Us?</span></h3>
                <div className="portfolioList">
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index + item.title} onClick={() => this.setState({ selected: index })}>
                                    <PortfolioCard id={"item" + index} imgUrl={item.urlToImage} title={item.title} text={item.description} />
                                </div>
                            )
                        })
                    }
                    />
                </div>
                <div className="buttonRow">
                    <div>
                        <Button type="reset" className="arrowButton" onClick={() => { this.onClick(this.state.selected - 4) }}> {"<-"} </Button>
                    </div>
                    <div>
                        <Button type="submit" className="arrowButton" onClick={() => { this.onClick(this.state.selected + 4) }}> {"->"} </Button>
                    </div>
                </div>
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


