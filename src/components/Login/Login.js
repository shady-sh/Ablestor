import { Component } from "react";
import axios from "axios";
import $ from "jquery";
import "../../css/Login/Login.css";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

export default class Login extends Component {
  login = () => {
    const loginEmail = this.loginEmail.value;
    const loginPw = this.loginPw.value;

    if (loginEmail === "" || loginEmail === undefined) {
      alert("이메일 주소를 입력해주세요.");
      this.loginEmail.focus();
      return;
    } else if (loginPw === "" || loginPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.loginPw.focus();
      return;
    }

    const send_param = {
      headers,
      email: this.loginEmail.value,
      password: this.loginPw.value,
    };
    axios
      .post("http://localhost:8080/member/login", send_param)
      //정상 수행
      .then((returnData) => {
        if (returnData.data.message) {
          // console.log("login_id:" + returnData.data._id);
          $.cookie("login_id", returnData.data._id, { expires: 1 });
          $.cookie("login_email", returnData.data.email, { expires: 1 });
          alert(returnData.data.message);
          window.location.reload();
        } else {
          alert(returnData.data.message);
        }
      })
      //에러
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="bg-img">
        <div className="content">
          <header>로그인 페이지</header>
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              this.login();
            }}
          >
            <div className="field">
              <span className="fa fa-user"></span>
              <input
                type="text"
                required
                placeholder="아이디"
                ref={(ref) => (this.loginEmail = ref)}
              />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                className="pass-key"
                required
                placeholder="패스워드"
                ref={(ref) => (this.loginPw = ref)}
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
            <a href="/Register">회원가입</a> <br />
            <a href="/">홈페이지 이동</a>
          </div>
        </div>
      </div>
    );
  }
}
