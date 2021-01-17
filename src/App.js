import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

class App extends React.Component {
  componentDidMount () {
    const mt_service = document.createElement("script");  
    mt_service.src = "https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js";
    mt_service.async = true;  
    document.body.appendChild(mt_service);

    const mt_service2 = document.createElement("script");  
    mt_service2.src = "https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js";
    mt_service2.async = true;  
    document.body.appendChild(mt_service2);
  }
  render() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>MT Captcha React Demo</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default App;

