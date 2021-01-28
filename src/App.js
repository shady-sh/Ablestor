import { Component } from "react";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import Reference from "./components/Reference";
import Partner from "./components/Partner";
import Synology from "./components/Synology";
import Login from "./containers/Login";
import Register from "./components/Login/Register";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/Introduce" component={Introduce} />
          <Route path="/Reference" component={Reference} />
          <Route path="/Partner" component={Partner} />
          <Route path="/Login" component={Login} />
          <Route path="/Synology" component={Synology} />
          <Route path="/Register" component={Register} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
