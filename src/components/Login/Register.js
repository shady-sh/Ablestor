import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../css/Login/Login.css";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const itemList = [
  { id: "username", type: "username", placeholder: "이름" },
  { id: "email", type: "email", placeholder: "이메일 주소(아이디)" },
  { id: "password", type: "password", placeholder: "비밀번호" },
  { id: "password_confirm", type: "password", placeholder: "비밀번호 재입력" },
];

export default class Register extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    submitted: false,
  };

  handleChange = (e) => {
    const type = e.target.dataset.id;
    const { value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [type]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { username: name, email, password, password_confirm } = user;
    if (name && email && password && password_confirm) {
      if (password !== password_confirm) {
        alert("비밀번호 재입력을 올바르게 입력해주세요.");
        return;
      }
      const send_param = {
        headers,
        name,
        email,
        password,
      };
      axios
        .post("http://localhost:8000/member/register", send_param)
        .then((returnData) => {
          if (returnData.data.message) {
            alert(returnData.data.message);
            if (returnData.data.dupYn === "1") {
              window.location.reload();
            } else {
              window.location.href = "/Login";
            }
          } else {
            alert("회원가입 실패");
          }
        });
      // this.props.register(user);
    }
  };

  generateForm = (_type, id, _placeholder, i) => {
    return (
      <Form.Control
        key={i}
        type={_type}
        data-id={id}
        placeholder={_placeholder}
        onChange={this.handleChange}
      />
    );
  };
  render() {
    return (
      <div className="bg-img">
        <div className="content">
          <header>회원가입</header> <br />
          <Form onSubmit={this.handleSubmit}>
            {itemList.map((item, i) => {
              return this.generateForm(item.type, item.id, item.placeholder, i);
            })}
            <br />
            <Button variant="outline-info" type="submit">
              가입 제출
            </Button>
            <p>
              가입된 계정이 있으신가요? <br />
              <a href="/Login">로그인 페이지로 이동</a>
            </p>
          </Form>
        </div>
      </div>
    );
  }
}
