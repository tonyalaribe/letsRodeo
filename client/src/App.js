import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ProtectedRoutes from "./components/ProtectedRoutes.js";
import Rodeos from "./pages/Rodeos";
import Login from "./pages/login.js";


// added changes here ****

// const App = () => 
//   <div>
//     <Nav />
//     <Rodeos />
//   </div>;

//specify what routes you are going to the route line


// class App extends Component{
//     render(){
//       return (
//         //write the if else for login route
   
//       )
//     }
// }


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Rodeos} />
      {/* <ProtectedRoutes   path="/" component={Rodeos} /> */}
            {/* <ProtectedRoutes   path="/" component={Rodeos} /> */}
        {/* <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;

//becuase its going to / it wont go to login .. 

