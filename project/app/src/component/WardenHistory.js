import React, {Component} from "react";
import {Link} from 'react-router-dom';

const style = {
    padding: 20,
    width: 300
  }

class WardenApplication extends Component{
    render(){
        return(
            <div className="container">
                <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left" id="text"><b>Shelly Cooper</b></div>
                <br/>
                <div className="left">@shellyCooper</div>
                <div className="right">logout</div>
            </div>
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
                        <div className="black-text left"> <b> 22 August, 2019 6:00 pm </b>
                        </div>

                        <div className="red-text right"><b>Disapproved</b>
                        </div>

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
                        <div className="black-text left"> <b> 22 August, 2019 6:00 pm </b>
                        </div>

                        <div className="red-text right"><b>Disapproved</b>
                        </div>

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
                        <div className="black-text left"> <b> 22 August, 2019 6:00 pm </b>
                        </div>

                        <div className="green-text right"><b>Approved</b>
                        </div>

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
                        <div className="black-text left"><b> 22 August, 2019 6:00 pm</b>
                        </div>

                        <div className="yellow-text text-darken-2 right"><b>Pending</b>
                        </div>

                        

                    </div>

                    
                    

                    

                </div>
            </div>
            </div>
        )
    }
}

export default WardenApplication;