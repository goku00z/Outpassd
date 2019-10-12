import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserHistory from "./UserHistory";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {sendLogs} from "../actions/index";
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
    constructor() {
        super();
        this.state = {
            Date: "",
            Time: "",
            Place: "",
            Method: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const plan = {
            Date: this.state.Date,
            Time: this.state.Time,
            Place: this.state.Place,
            Method: this.state.Method,
            Enrollment: this.props.user.Enrollment,
            Reason: "",
            StatusByParent: "Pending",
            StatusByWarden: "Pending"
        };

        console.log(plan);
        this.props.sendLogs(plan, this.props.history);
    }
    render(){
        const user = this.props.user;
    return(
        <div className="container">
            <div className="row center">
                    <img src="/images/outpassdlogo-03.png" style={style}/>
                    </div>
            <div className="row">
                <div className="left">{user.Name}</div>
                <br/>
                <div className="left">{user.Enrollment}</div>
                <div className="right">logout</div>
            </div>
            <hr className="colorPink"></hr>
            <div className="row">
                <div className="col s12 center btn white black-text"><Link style={style1} to="/userLogs">History</Link></div>
            </div>
            <div className="row z-depth-2 cardBox">
                <h2 className="center" style={style1}>plan</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Date of visit</label>
                    <input type="text" placeholder="Date" name="Date" onChange={this.onChange} value={this.state.Date} />
                    <label>Time to leave</label>
                    <input type="text" placeholder="Time" name="Time" onChange={this.onChange} value={this.state.Time}/>
                    <label>Proceeding to</label>
                    <input type="text" placeholder="Place" name="Place" onChange={this.onChange} value={this.state.Place} />
                    <label>Conveyence</label>
                    <input type="text" placeholder="" name="Method" onChange={this.onChange} value={this.state.Method} />
                    
                    <div>
                            <input class="btn waves-effect waves-light white-text" type="submit" name="action" value="Send" />
                            </div>
                </form>
            </div>
        </div>
    )}
};

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {sendLogs})(withRouter(Dashboard));