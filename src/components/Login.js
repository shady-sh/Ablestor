import { Component } from "react";
import "../css/Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="content">
          <header>로그인 페이지</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user"></span>
              <input type="text" required placeholder="아이디" />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                required
                placeholder="패스워드"
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
            <div className="facebook">
              <i className="fab fa-facebook-f">
                <span>페이스북</span>
              </i>
            </div>
            <div className="instagram">
              <i className="fab fa-instagram">
                <span>인스타그램</span>
              </i>
            </div>
          </div>
          <div className="signup">
            {`계정이 없으신가요? `}
            <a href="/">회원가입</a>
          </div>
        </div>
      </div>
    );
  }
}
