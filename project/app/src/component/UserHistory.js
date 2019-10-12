import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getLogs, setUser} from "../actions/index";

const style = {
    padding: 20,
    width: 300
  }

class RegisterApplication extends Component{
    constructor(){
        super();

        // this.Status = this.Status.bind(this);
    }

    Status(logs){
        if(logs.StatusByWarden.localeCompare("Approved") == 0)
            return (<div className="green-text right"><b>Approved</b>
            </div>)
    
        else if(logs.StatusByWarden.localeCompare("Pending") == 0)
            return (<div className="yellow-text right"><b>Pending</b>
            </div>)
    
        else if(logs.StatusByParent.localeCompare("Approved") == 0)
            return (<div className="green-text right"><b>Approved</b>
            </div>)
    
        else if(logs.StatusByParent.localeCompare("Pending") == 0)
            return (<div className="yellow-text right"><b>Pending</b>
            </div>)
    
        else
            return (<div className="red-text right"><b>Disapproved</b>
            </div>)
    }

    componentDidMount(){
        this.props.setUser();
        this.props.getLogs(this.props.user.Enrollment);
    }

    renderList(){
        if(this.props.log){
            return this.props.log.map(logs => {
                return (
                    <div className="card-panel white z-depth-2">
                        <div className="black-text left"><b>{logs.Place}</b>
                        </div>

                        <div className="black-text right">{logs.Method}
                        </div>

                        <br></br>
                        <div className="black-text left">{logs.Date}
                        </div>

                        {this.Status(logs)}

                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left" id="text"><b>{this.props.user.Name}</b></div>
                <br/>
                <div className="left">{this.props.user.Enrollment}</div>
                <div className="right">logout</div>
            </div>
            <div className="row z-depth-2 cardBox1">
                <div>
                    {this.renderList()}

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
    user: state.user,
    log: state.log
})

export default connect(mapStateToProps, {getLogs, setUser})(RegisterApplication);