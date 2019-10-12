import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./loginStudent.css";


class LoginStudent extends Component{
    render(){
        return (
            <div>
                <div className="container valign">
                    <div className="row center">
                        Outpassed
                    </div>
                    <div className="row">
                        <h2 className="center">login</h2>
                        <form>
                            <label>UserName</label>
                            <input type="text" placeholder="UserName" className="usercss" />
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                            <div>
                                <Link to="/dashboard">Done</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginStudent;