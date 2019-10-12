import React, {Component} from "react";
import {Link} from 'react-router-dom';

class RegisterApplication extends Component{
    render(){
        return(
            <div className="row">
                <h2>Start</h2>
                <h2 className="center">plan</h2>
                <form>
                    <label>Date of visit</label>
                    <input type="text" placeholder="Date" />
                    <label>Time to leave</label>
                    <input type="text" placeholder="Time" />
                    <label>Proceeding to</label>
                    <input type="text" placeholder="Place" />
                    <label>Conveyence</label>
                    <input type="text" placeholder="" />
                    
                    <div>
                        <Link to="/dashboard">Send</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterApplication;