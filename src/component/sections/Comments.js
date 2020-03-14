import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJsonApi } from '../../services/actions';

class CommentsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        this.props.actions.jsonApi("/1/comments", this.onSuccess, this.onError)
    }

    onSuccess = (data) => {
        console.log("Hola", data)
        this.setState({ list: [...new Set([...this.state.list, ...data.data])] })
    }

    onError = (e) => {
        console.log("ERROR AL CONSUMIER EL SERVICIO", e)
    }

    render() {
        return (
            <div>

            </div>
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

