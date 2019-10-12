import React , {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Login from "./component/login/login";
import LoginStudent from "./component/login/loginStudent";
import Dashboard from "./component/dashboard";
import registerApplication from "./component/registerApplication";

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            Outpassed
            <Route exact path="/" component={Login} />
            <Route exact path="/loginStudent" component={LoginStudent} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/register" component={registerApplication}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
