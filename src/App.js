import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./config/Auth";
import { PrivateRoute, PrivateRoute2 } from "./config/PrivateRoute";

import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/app/Login";
import SignUp from "./pages/app/SignUp";
import Login2 from "./pages/app2/Login2";
import SignUp2 from "./pages/app2/SignUp2";
import Home from "./pages/app/Home";
import Home2 from "./pages/app2/Home2";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login2" component={Login2} />
          <Route exact path="/signup2" component={SignUp2} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute2 exact path="/home2" component={Home2} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
