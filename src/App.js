import { Component } from "react";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import Reference from "./components/Reference";
import Partner from "./components/Partner";
import Synology from "./components/Synology";
import Login from "./containers/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";
import { BrowserRouter, Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import Dashboard from "./components/mypage/Dashboard";
import Account from "./components/mypage/Account";
import Career from "./components/mypage/Career";
import Order from "./components/mypage/Order";
import Product from "./components/mypage/Product";
import Qna from "./components/mypage/Qna";

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
          <Route path="/Logout" component={Logout} />
          <Route path="/Synology" component={Synology} />
          <Route path="/Register" component={Register} />
          <Route path="/MyPage/Dashboard" component={Dashboard} />
          <Route path="/MyPage/Account" component={Account} />
          <Route path="/MyPage/Career" component={Career} />
          <Route path="/MyPage/Order" component={Order} />
          <Route path="/MyPage/Product" component={Product} />
          <Route path="/MyPage/Qna" component={Qna} />
        </BrowserRouter>
      </div>
    );
  }
  componentDidMount() {
    const loginLink = ["login", "Login", "register", "Register"];
    if (window.location.href.includes("mypage")) {
      if (!$.cookie("login_id")) {
        window.location.href = "/login";
      }
    }
    for (let i = 0; i < loginLink.length; i++) {
      if (window.location.href.includes(loginLink[i])) {
        if ($.cookie("login_id")) {
          window.location.href = "/";
        }
      }
    }
  }
}

export default App;
