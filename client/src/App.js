import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Fragment } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Family from "./components/pages/Family";
import Resident from "./components/pages/Resident";
import Resources from "./components/pages/Resources";
// import About from "./components/pages/About";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import Alerts from "./components/layout/Alerts";

// import ContactState from "./context/contact/ContactState";
// import AuthState from "./context/auth/AuthState";
// import AlertState from "./context/alert/AlertState";
// import setAuthToken from "./utils/setAuthToken";
import "./App.css";
const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/family" component={Family} />
    <Route exact path="/resident" component={Resident} />
    <Route exapt path="/resources" component={Resources} />
  </Router>

  // <AuthState>
  //   <ContactState>
  //     <AlertState>
  //       <Router>
  //         <Fragment>
  //           <Navbar />
  //           <div className="container">
  //             <Alerts></Alerts>
  //             <Switch>
  //               <Route exact path="/" component={Home} />
  //               <Route exact path="/about" component={About} />
  //               <Route exact path="/register" component={Register} />
  //               <Route exact path="/login" component={Login} />
  //             </Switch>
  //           </div>
  //         </Fragment>
  //       </Router>
  //     </AlertState>
  //   </ContactState>
  // </AuthState>;
);

export default App;