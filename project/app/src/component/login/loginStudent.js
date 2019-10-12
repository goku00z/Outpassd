import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./loginStudent.css";

const style = {
    padding: 20,
    width: 300
  }

class LoginStudent extends Component{
    render(){
        return (
            <div>
                <div className="container valign">
                    <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
                    <div className="row">
                        <h2 className="center" id="login">login</h2>
                        <form>
                            <label>UserName</label>
                            <input type="text" placeholder="UserName" className="usercss" id="inputBox"/>
                            <label>Password</label>
                            <input type="password" placeholder="Password" id="inputBox"/>
                            <div>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginStudent;