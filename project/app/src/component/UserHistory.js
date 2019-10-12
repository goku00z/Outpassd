import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getLogs} from "../actions/index";

const style = {
    padding: 20,
    width: 300
  }

class RegisterApplication extends Component{
    componentWillMount(){
        this.props.getLogs(this.props.user.Enrollment);
    }
    render(){
        return(
            <div className="container">
                <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left" id="text"><b>Aadya Mishra</b></div>
                <br/>
                <div className="left">IIT2017016</div>
                <div className="right">logout</div>
            </div>
            <div className="row z-depth-2 cardBox1">
                <div>
                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
                        </div>

                        <div className="red-text right"><b>Disapproved</b>
                        </div>

                    </div>

                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
                        </div>

                        <div className="green-text right"><b>Approved</b>
                        </div>

                    </div>

                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
                        </div>

                        <div className="yellow-text text-darken-2 right"><b>Pending</b>
                        </div>

                    </div>

                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
                        </div>

                        <div className="red-text right"><b>Disapproved</b>
                        </div>

                    </div>

                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
                        </div>

                        <div className="green-text right"><b>Approved</b>
                        </div>

                    </div>

                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>Civil Lines</b>
                        </div>

                        <div className="black-text right">College Bus
                        </div>

                        <br></br>
                        <div className="black-text left"> 22 August, 2019
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

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getLogs})(RegisterApplication);