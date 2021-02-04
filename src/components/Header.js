import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "normalize.css";
import "../css/Header.css";
import $ from "jquery";
import {} from "jquery.cookie";

const titles = ["회사정보", "제품정보", "솔루션", "고객지원"];

const dropdown = [
  [
    { href: "/Introduce", val: "회사소개" },
    { href: "/", val: "공지사항" },
    { href: "/", val: "뉴스/미디어 소식" },
    { href: "/Reference", val: "레퍼런스" },
    { href: "/Partner", val: "파트너" },
    { href: "/", val: "프로모션" },
    { href: "/", val: "견적/구매 관련 문의" },
  ],
  [
    { href: "/Synology", val: "Synology" },
    { href: "/", val: "G-technology" },
    { href: "/", val: "Asustor" },
    { href: "/", val: "Dahua" },
    { href: "/", val: "HDD" },
  ],
  [
    { href: "/", val: "mommoss" },
    { href: "/", val: "pentaARK" },
    { href: "/", val: "CMS" },
    { href: "/", val: "포인트락" },
  ],
  [
    { href: "/", val: "견적/구매 관련 문의" },
    { href: "/", val: "기술 교육 세미나" },
    { href: "/", val: "정품 등록 및 확인" },
    { href: "/", val: "정품 등록 오류 문의" },
    { href: "/", val: "동영상 강좌" },
    { href: "/", val: "자주 묻는 질문" },
    { href: "/", val: "다운로드 센터" },
    { href: "/", val: "자가 진단 서비스" },
    { href: "/", val: "기술 상담 문의" },
    { href: "/", val: "입고 수리 신청" },
    { href: "/", val: "서비스 정책" },
  ],
  [{ href: "/Login", val: "로그인" }],
];

const login_dropdown = [
  { href: "/mypage/dashboard", val: "대시보드" },
  { href: "/mypage/account", val: "계정" },
  { href: "/mypage/order", val: "주문" },
  { href: "/mypage/product", val: "기기" },
  { href: "/mypage/qna", val: "나의 질문 관리" },
  { href: "/Logout", val: "로그아웃" },
];

export default class Header extends Component {
  getLoginState = () => {
    if ($.cookie("login_id")) {
      return (
        <NavDropdown title="계정" id="4">
          {login_dropdown.map((num, idx) => {
            return (
              <NavDropdown.Item key={idx} href={num.href}>
                {num.val}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown title="계정" id="4">
          {dropdown[4].map((num, idx) => {
            return (
              <NavDropdown.Item key={idx} href={num.href}>
                {num.val}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    }
  };

  render() {
    return (
      <header>
        <Navbar sticky="top" bg="black" variant="black">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.ablestor.com/public/image/logo_white.png"
              style={{ marginLeft: "6rem" }}
            />
          </Navbar.Brand>
          <Nav className="m-auto navc">
            {titles.map((v, i) => {
              return (
                <NavDropdown title={v} id={i} key={i}>
                  {dropdown[i].map((num, idx) => {
                    return (
                      <NavDropdown.Item key={idx} href={num.href}>
                        {num.val}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            })}
            <Nav.Link href="/">에이블샵</Nav.Link>
            {this.getLoginState()}
          </Nav>
        </Navbar>
      </header>
    );
  }
}
