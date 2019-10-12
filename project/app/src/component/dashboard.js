import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserHistory from "./UserHistory";
import "./login/loginStudent.css";

const style = {
    padding: 20,
    width: 300
  }

  const style1 = 
{
    color:"black",
    font: "Poppins",
} 
class Dashboard extends Component{
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
            <hr className="colorPink"></hr>
            <div className="row">
                <div className="col s12 center btn white black-text"><Link style={style1} to="/userLogs">History</Link></div>
            </div>
            <div className="row z-depth-2 cardBox" >
                <h2 className="center" style={style1}>plan</h2>
                <form>
                    <label className="black-text">Date of visit</label>
                    <input type="text" placeholder="" id="inputBox" />
                    <label className="black-text">Time to leave</label>
                    <input type="text" placeholder="" id="inputBox"/>
                    <label className="black-text">Proceeding to</label>
                    <input type="text" placeholder="" id="inputBox"/>
                    <label className="black-text">Conveyence</label>
                    <input type="text" placeholder="" id="inputBox"/>
                    
                    <div>
                        <Link to="/dashboard" className="btn">Send</Link>
                    </div>
                </form>
            </div>
        </div>
    )}
};

export default Dashboard;