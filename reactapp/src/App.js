import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Whiteboard from "./components/Whiteboard/Whiteboard";
import Admin from "./components/Admin/Admin";
;

const App = () => (
  <Router>
    <div>
      
      <Route exact path="/" component={Login} />
      <Route exact path="/whiteboard" component={Whiteboard} />
      <Route exact path="/admin" component={Admin} />
    </div>
  </Router>
);







export default App;