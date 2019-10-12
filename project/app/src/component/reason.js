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

class Reason extends Component{
    render(){
    return(
        <div className="container">
            <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
            </div>
            <div className="row center">
                <div className="black-text left"><b>Aadya Mishra</b>
                </div>

                <div className="black-text right">iit2017016
                </div>

                <br></br>
                <div className="black-text left">Civil Lines
                </div>

                <div className="grey-text right">College Bus
                </div>

                <br></br>
                <div className="black-text left"><b>20 Aug 2020</b>
                </div>

                <div className="black-text right"><b>08:00 PM</b>
                </div>
                <br></br>
                <br></br>
                <textarea rows="100" cols="100" id="text-box-id">
                </textarea>
                <button class="col s12 center btn white black-text" type="submit" name="action">Home</button>
                <button class="btn waves-effect waves-light" type="submit" name="action">Disapprove</button>
            </div>
        </div>

    )}
};

export default Reason;