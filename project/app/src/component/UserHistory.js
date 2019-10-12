import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getLogs} from "../actions/index";

const style = {
    padding: 20,
    width: 300
  }


class RegisterApplication extends Component{
    componentWillMount(){
        this.props.getLogs(this.props.user.Enrollment);
    }
    render(){
        return(
            <div className="container">
                <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left">Muskan</div>
                <br/>
                <div className="left">IEC2017045</div>
                <div className="right">logout</div>
            </div>
            <div className="row">
                <div>
                    <div className="card-panel teal">
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getLogs})(RegisterApplication);