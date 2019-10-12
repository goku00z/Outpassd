import React, {Component} from 'react';
import {Link} from "react-router-dom";

const style1 = {
    padding: 50,
    width: 400
}
const style = 
{
    color:"white",
    font: "Poppins"
} 

const Login = () => {
    return (
        <div>
            <div className="container">
            <div className="row center">
            <img src="/images/outpassdlogo-02.png" style={style1}/>
                    </div>
               
                <div className="row">
                    
                    <div className="btn" ><Link style={style} to="/loginStudent">Student</Link></div>
                    <div className="btn" ><Link style={style} to="/">Warden</Link></div>
                    {/* <Link to="/"><div className="btn">Student</div></Link> */}
                </div>
            </div>
        </div>
    )
}

export default Login;