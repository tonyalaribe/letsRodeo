import React, {Component} from "react";
import Rodeos from "./pages/Rodeos";
import Login from "./pages/login.js";
import Nav from "./components/Nav";
import ProtectedRoutes from "./components/ProtectedRoutes.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

// const App = () => 
//   <div>
//     <Nav />
//     <Rodeos />
//   </div>;

//specify what routes you are going to the route line


class App extends Component{
    render(){
      return (
        <Router>
          <section>
            <Route exact path="/login" component={Login} />
            <ProtectedRoutes  exact path="/" component={Rodeos} />
          </section>
        </Router>
      )
    }
}

export default App;
