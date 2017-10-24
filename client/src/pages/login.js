import React, {Component} from "react";
import AuthService, {Emitter} from "../utils/auth0.js";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        console.log("login component")
        
        Emitter.on("*", (e)=>{
            console.log(e)
            console.log("authenticate: true")
                this.setState({authenticate:true});
                AuthService.lock.hide();
        })
        // AuthService.emitter.on("authenticated",()=>{
        //     console.log("authenticate: true")
        //     this.setState({authenticate:true});
        //     AuthService.lock.hide();
        // })

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