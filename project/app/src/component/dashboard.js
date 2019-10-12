import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserHistory from "./UserHistory";

class Dashboard extends Component{
    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="left">Muskan</div>
                <div className="right">IEC2017045</div>
            </div>
            <div className="row">
                <div className="col s12 center"><Link to="/userLogs" className="btn links" >History</Link></div>
            </div>
            <div className="row">
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
                        <Link to="/dashboard" className="btn">Send</Link>
                    </div>
                </form>
            </div>
        </div>
    )}
};

export default Dashboard;