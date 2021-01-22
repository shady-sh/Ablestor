import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "normalize.css";
import "../css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar sticky="top" bg="black" variant="black">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.ablestor.com/public/image/logo_white.png"
              style={{ padding: "100px" }}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="m-auto navc">
            <NavDropdown
              title="회사정보"
              id={0}
              onMouseEnter={(e) => {
                this.currID = e.target.id;
              }}
            >
              {dropdown[0].map((num) => {
                return (
                  <NavDropdown.Item key={num.id} href={num.href}>
                    {num.val}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="제품정보" id="1">
              {dropdown[1].map((num) => {
                return (
                  <NavDropdown.Item key={num.id} href={num.href}>
                    {num.val}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="솔루션" id="2">
              {dropdown[2].map((num) => {
                return (
                  <NavDropdown.Item key={num.id} href={num.href}>
                    {num.val}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <NavDropdown title="고객지원" id="3">
              {dropdown[3].map((num) => {
                return (
                  <NavDropdown.Item key={num.id} href={num.href}>
                    {num.val}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link href="/">에이블샵</Nav.Link>
            <NavDropdown title="계정" id="4">
              {dropdown[4].map((num) => {
                return (
                  <NavDropdown.Item key={num.id} href={num.href}>
                    {num.val}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

const dropdown = [
  [
    { id: 1, href: "/Introduce", val: "회사소개" },
    { id: 2, href: "/", val: "공지사항" },
    { id: 3, href: "/", val: "뉴스/미디어 소식" },
    { id: 4, href: "/Reference", val: "레퍼런스" },
    { id: 5, href: "/Partner", val: "파트너" },
    { id: 6, href: "/", val: "프로모션" },
    { id: 7, href: "/", val: "견적/구매 관련 문의" },
  ],
  [
    { id: 8, href: "/Synology", val: "Synology" },
    { id: 9, href: "/", val: "G-technology" },
    { id: 10, href: "/", val: "Asustor" },
    { id: 11, href: "/", val: "Dahua" },
    { id: 12, href: "/", val: "HDD" },
  ],
  [
    { id: 13, href: "/", val: "mommoss" },
    { id: 14, href: "/", val: "pentaARK" },
    { id: 15, href: "/", val: "CMS" },
    { id: 16, href: "/", val: "포인트락" },
  ],
  [
    { id: 17, href: "/", val: "견적/구매 관련 문의" },
    { id: 18, href: "/", val: "기술 교육 세미나" },
    { id: 19, href: "/", val: "정품 등록 및 확인" },
    { id: 20, href: "/", val: "정품 등록 오류 문의" },
    { id: 21, href: "/", val: "동영상 강좌" },
    { id: 22, href: "/", val: "자주 묻는 질문" },
    { id: 23, href: "/", val: "다운로드 센터" },
    { id: 24, href: "/", val: "자가 진단 서비스" },
    { id: 25, href: "/", val: "기술 상담 문의" },
    { id: 26, href: "/", val: "입고 수리 신청" },
    { id: 27, href: "/", val: "서비스 정책" },
  ],
  [{ id: 28, href: "/Login", val: "로그인" }],
];
