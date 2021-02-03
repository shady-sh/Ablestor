import { useState } from "react";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import "../../css/Login/Login.css";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const generateLink = (type, name) => {
  return (
    <div className={type}>
      <i className={`fab fa-${type}`}>
        <span>{name}</span>
      </i>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginExecute = () => {
    const send_param = {
      headers,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8000/member/login", send_param)
      .then((returnData) => {
        if (returnData.data.message) {
          $.cookie("login_id", returnData.data._id, { expires: 1 });
          $.cookie("login_email", returnData.data.email, { expires: 1 });
          alert(returnData.data.message);
          window.location.href = "/";
        } else {
          alert(returnData.data.sendMsg);
        }
      });
  };
  return (
    <div className="bg-img">
      <div className="content">
        <header>로그인 페이지</header>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            loginExecute();
          }}
        >
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              required
              placeholder="아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type="password"
              className="pass-key"
              required
              placeholder="패스워드"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="show">SHOW</span>
          </div>
          <div className="pass">
            <a href="/">로그인에 문제가 있으신가요?</a>
          </div>
          <div className="field">
            <input type="submit" value="로그인" />
          </div>
        </form>
        <div className="login">다른 로그인 방법</div>
        <div className="links">
          {generateLink("facebook", "페이스북")}
          {generateLink("instagram", "인스타그램")}
        </div>
        <div className="signup">
          {`계정이 없으신가요? `}
          <a href="/Register">회원가입</a> <br />
          <a href="/">홈페이지 이동</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
