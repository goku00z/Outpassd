import React , {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Login from "./component/login/login";
import LoginStudent from "./component/login/loginStudent";
import Dashboard from "./component/dashboard";
import userHistory from "./component/UserHistory";
import LoginWarden from "./component/login/loginWarden";
import DashboardWarden from "./component/dashboardWarden";
import wardenHistory from "./component/WardenHistory";

const style = {
  padding: 20,
  width: 300
}

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {/* <div className="center"><img src="/images/outpassdlogo-02.png" style={style}/></div> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/loginStudent" component={LoginStudent} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/userLogs" component={userHistory}/>
            <Route exact path="/loginWarden" component={LoginWarden} />
            <Route exact path="/dashboardWarden" component={DashboardWarden} />
            <Route exact path="/wardenHistory" component={wardenHistory}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
