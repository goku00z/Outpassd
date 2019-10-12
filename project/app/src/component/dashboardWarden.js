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

class DashboardWarden extends Component{
    render(){
    return(
        <div className="container">
            <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left"><b>Shelly Cooper</b></div>
                <br/>
                <div className="left">@shellyCooper</div>
                <div className="right">logout</div>
            </div>
            <hr className="colorPink"></hr>
            <div className="row">
                <div className="col s12 center btn white black-text"><Link style={style1} to="/wardenHistory">History</Link></div>
            </div>
            <h2 className="center" style={style1}>requests</h2>
            <div className="row z-depth-2 cardBox1">
                <div>
                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>

                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>

                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>

                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>

                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>

                    <div className="card-panel white z-depth-2">

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
                        <div className="black-text left"><b>8:00 pm</b>
                        </div>

                        <div className="black-text right"> 22 August, 2019
                        </div>

                        <button class="col s12 center btn white black-text" type="submit" name="action">Disapprove</button>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Approve</button>
                        

                    </div>


                </div>
            </div>
        </div>
    )}
};

export default DashboardWarden;