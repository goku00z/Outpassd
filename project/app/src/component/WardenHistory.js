import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getAllLogs} from "../actions/index";

const style = {
    padding: 20,
    width: 300
  }

class WardenApplication extends Component{
    constructor(){
        super();
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
        this.props.getAllLogs();
    }

    renderList(){
        if(this.props.wardenlog){
            return this.props.wardenlog.map(logs => {
                return (

                    <div className="card-panel white z-depth-2">

                        

                    <div className="black-text left"><b>{logs.Name}</b>
                        </div>

                        <div className="black-text right">{logs.Enrollment}
                        </div>

                        <br></br>

                        <div className="black-text left">{logs.Place}
                        </div>

                        <div className="grey-text right">{logs.Method}
                        </div>

                        <br></br>
                        <div className="black-text left"> <b>{logs.Date + " " + logs.Time}</b>
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
                <div className="left" id="text"><b>Warden</b></div>
                <div className="right">logout</div>
            </div>
            <div className="row z-depth-2 cardBox1">
                <div>
                {this.renderList()}
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

const mapStateToProps = state => ({
    wardenlog: state.wardenlog
})

export default connect(mapStateToProps, {getAllLogs})(WardenApplication);