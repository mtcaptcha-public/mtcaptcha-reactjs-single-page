import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Error from './error.component';
import {loginUser as login} from '../service/login.service'



export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    var errormsg="";

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        var verifiedtoken = data.get('mtcaptcha-verifiedtoken')
        const token = await login({
            username,
            password,
            verifiedtoken
        });
        if (token.user != null) { setToken(token); }
        else {
            errormsg = token.msg
            setError(errormsg)
        }
    }
    useEffect(() => {
        window.mtcaptchaConfig.renderQueue.push('login-captcha');
    })
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            {error && <Error errormsg={error} />}

            <div className="form-group">
                <label>Username</label>
                <input id="uname" type="text" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <div id="login-captcha"></div>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
