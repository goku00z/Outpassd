import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Link to="/loginStudent"> Student </Link>
                    <Link to="/"> Warden </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;