import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as translationActions from '../../actions/TranslateActions';
import translateReducer from "../../reducers/translateReducer";

class HomePage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state ={
            text:""
        };
        this.onClickTranslate = this.onClickTranslate.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    };
    onTextChange(event) {
        this.setState({text: event.target.value});
    }
    onClickTranslate(){
        this.props.dispatch(translationActions.loadTranslationSuccess(this.state.text));
    }
    render() {
        debugger;
        return (
            <div className="jumbotron">
                <h1>{this.props.text}</h1>
                <h1>{this.props.state}</h1>
                <input type="text" onChange={this.onTextChange}
                       value={this.state.text} />
                <input type="submit"
                       value="Translate"
                       onClick={this.onClickTranslate}/>
                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        );
    }
}

HomePage.propTypes = {
    //text: PropTypes.string.isRequired,
    //actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        text: state.translateReducer
    };
}
export default connect(mapStateToProps)(HomePage);
