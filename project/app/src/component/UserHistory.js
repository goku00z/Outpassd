import React, {Component} from "react";
import {Link} from 'react-router-dom';

const style = {
    padding: 20,
    width: 300
  }


class RegisterApplication extends Component{
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
            <div className="row">
                <div>
                    <div className="card-panel teal">
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default RegisterApplication;