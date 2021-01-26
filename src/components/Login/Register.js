import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../../css/Login/Login.css";

export default class Register extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="content">
          <header>회원가입</header> <br />
          <Form>
            <Form.Control type="username" placeholder="이름" />
            <Form.Control type="email" placeholder="이메일 주소(아이디)" />
            <Form.Control type="password" placeholder="비밀번호" />
            <Form.Control type="password" placeholder="비밀번호 재입력" />
            <br />
            <Button variant="outline-info" type="submit">
              가입
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
