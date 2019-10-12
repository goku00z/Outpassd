import React, {Component} from 'react';
import {Link} from "react-router-dom";

const style = {
    padding: 50,
    width: 400
}

const Login = () => {
    return (
        <div>
            <div className="container">
            <div className="row center">
            <img src="/images/outpassdlogo-02.png" style={style}/>
                    </div>
                <div className="row">
                    <div className="btn"><Link to="/loginStudent"> Student </Link></div>
                </div>
                <div className="row">
                    <div className="btn"><Link to="/"> Warden </Link></div>
                    {/* <Link to="/"><div className="btn">Student</div></Link> */}
                </div>
            </div>
        </div>
    )
}

export default Login;