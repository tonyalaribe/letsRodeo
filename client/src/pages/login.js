import React, {Component} from "react";
import AuthService, {Emitter} from "../utils/auth0.js";
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props) {
		super(props);
		AuthService.emitter.on("authenticated", () => {
			console.log("authenticated");
			this.setState({ authenticated: true });
			AuthService.lock.hide();
		});
	}
	state = {};
	componentDidMount() {
		AuthService.login();
	}
	render() {
		return this.state.authenticated ? <Redirect to="/" /> : <section />;
	}
}

export default Login;
