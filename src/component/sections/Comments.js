import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJsonApi } from '../../services/actions';
import { Image, Container, Row, Col } from 'react-bootstrap';
import CommentItem from '../CommentItem';

class CommentsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selected: 0
        };
    }

    componentDidMount() {
        this.props.actions.jsonApi("/1/comments", this.onSuccess, this.onError)
    }

    onSuccess = (data) => {
        this.setState({ list: [...new Set([...this.state.list, ...data.data])] })
    }

    onError = (e) => {
        console.log("ERROR AL CONSUMIER EL SERVICIO", e)
    }

    returnItem(index) {
        const item = this.state.list[index]
        return <CommentItem name={item.name} email={item.email} body={item.body} />
    }

    render() {
        const { selected, list } = this.state
        return (
            this.state.list.length > 0 ?
                <Container id={this.props.id} fluid className="commentContainer">
                    <h2>What our <span>Client Says?</span></h2>
                    <Row>
                        <Col xs={4} onClick={() => this.setState({ selected: selected - 1 })}>
                            {selected > 0 ?
                                this.returnItem(selected - 1)
                                : <div />
                            }
                        </Col>
                        <Col xs={4}>
                            {this.returnItem(selected)}
                        </Col>
                        <Col xs={4} onClick={() => this.setState({ selected: selected + 1 })}>
                            {(selected + 1) < list.length ?
                                this.returnItem(selected + 1)
                                : <div />
                            }
                        </Col>
                    </Row>
                </Container>
                : <div />
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            jsonApi: bindActionCreators(getJsonApi, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);

