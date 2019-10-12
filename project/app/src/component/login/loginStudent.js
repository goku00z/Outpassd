import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./loginStudent.css";
import {connect} from "react-redux";
import {loginStudent, setUser} from "../../actions/index";
import {withRouter} from "react-router-dom";

const style = {
    padding: 20,
    width: 300
  }

class LoginStudent extends Component{
    constructor() {
        super();
        this.state = {
            UserName: "",
            Pass: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.UserName,
            password: this.state.Pass
        };

        console.log(user);
        this.props.loginStudent(user, this.props.history);
    }
    render(){
        return (
            <div>
                <div className="container valign">
                    <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
                    <div className="row">
                        <h2 className="center" id="login">login</h2>
                        <form onSubmit={this.onSubmit}>
                            <label>UserName</label>
                            <input type="email" placeholder="UserName" className="usercss" name="UserName" id="inputBox" onChange={this.onChange}
                                                value={this.state.UserName}/>
                            <label>Password</label>
                            <input type="password" placeholder="Password" id="inputBox" name="Pass" onChange={this.onChange}
                                                value={this.state.Pass}/>
                            <div>
                            <input class="btn waves-effect waves-light" type="submit" name="action" value="Done" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {loginStudent, setUser})(withRouter(LoginStudent));
