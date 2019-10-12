import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="btn"><Link to="/loginStudent"> Student </Link></div>
                    <div className="btn"><Link to="/"> Warden </Link></div>
                    {/* <Link to="/"><div className="btn">Student</div></Link> */}
                </div>
            </div>
        </div>
    )
}

export default Login;