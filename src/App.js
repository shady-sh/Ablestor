import { Component } from "react";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
