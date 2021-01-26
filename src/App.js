import { Component } from "react";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import Reference from "./components/Reference";
import Partner from "./components/Partner";
import Synology from "./components/Synology";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Introduce">
            <Introduce />
          </Route>
          <Route path="/Reference">
            <Reference />
          </Route>
          <Route path="/Partner">
            <Partner />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Synology">
            <Synology />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
