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
    font: "poppins",
} 

class Requested extends Component{
    render(){
    return(
        <div className="container">
            <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
            </div>
            <div className="row center">
                <img src="/images/tickyellow.png" />
                <h3 className="center" style={style1}>request sent</h3>
                <p>for going to</p>
                <h3>Civil Lines</h3>
                <hr className="grey"></hr>
                <h6 className="grey-text">College Bus</h6>
                <h6><b>20 Aug 2020, 06:00 PM</b></h6>
                <br></br>
                <button class="btn waves-effect waves-light" type="submit" name="action">Home</button>
            </div>
        </div>

    )}
};

export default Requested;