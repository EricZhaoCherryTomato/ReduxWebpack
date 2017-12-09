import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as translationActions from '../../actions/TranslateActions';

class HomePage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state ={
            text:""
        };
        this.onClickTranslate = this.onClickTranslate.bind(this);
    };

    onClickTranslate(){
        this.props.dispatch(translationActions.loadTranslationSuccess(this.state.text));
    }
    render() {
        return (
            <div className="jumbotron">
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
        text: state.text
    };
}
export default connect(mapStateToProps)(HomePage);
