import React, {Component} from "react";
import AuthService from "../utils/auth0.js";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        AuthService.emitter.on("authenticated",()=>{
            this.setState({authenticate:true});
            AuthService.lock.hide();
        })

    }
    state={};
    componentDidMount(){
        AuthService.login()    
    }
    render(){
        return this.state.authenticate?<Redirect to="/" />:<section/>
    }
}

export default Login;