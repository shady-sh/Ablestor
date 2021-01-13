import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "normalize.css";
import "../css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    // this.getItems()
  }
  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

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
              id="1"
              onMouseEnter={(e) => {
                this.currID = e.target.id;
              }}
            >
              {listItems_1}
            </NavDropdown>
            <NavDropdown title="제품정보" id="2">
              {listItems_2}
            </NavDropdown>
            <NavDropdown title="솔루션" id="3">
              {listItems_3}
            </NavDropdown>
            <NavDropdown title="고객지원" id="4">
              {listItems_4}
            </NavDropdown>
            <Nav.Link href="/">에이블샵</Nav.Link>
            <NavDropdown title="계정" id="5">
              {listItems_5}
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

const dropdown_1 = [
  { id: 1, href: "/", val: "회사소개", path: "" },
  { id: 2, href: "/", val: "공지사항" },
  { id: 3, href: "/", val: "뉴스/미디어 소식" },
  { id: 4, href: "/", val: "레퍼런스" },
  { id: 5, href: "/", val: "파트너" },
  { id: 6, href: "/", val: "프로모션" },
  { id: 7, href: "/", val: "견적/구매 관련 문의" },
];
const dropdown_2 = [
  { id: 8, href: "/", val: "Synology" },
  { id: 9, href: "/", val: "G-technology" },
  { id: 10, href: "/", val: "Asustor" },
  { id: 11, href: "/", val: "Dahua" },
  { id: 12, href: "/", val: "HDD" },
];
const dropdown_3 = [
  { id: 13, href: "/", val: "mommoss" },
  { id: 14, href: "/", val: "pentaARK" },
  { id: 15, href: "/", val: "CMS" },
  { id: 16, href: "/", val: "포인트락" },
];
const dropdown_4 = [
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
];
const dropdown_5 = [{ id: 28, href: "/", val: "로그인" }];
const listItems_1 = dropdown_1.map((num) => (
  <NavDropdown.Item
    key={num.id}
    href={num.href}
    onClick={(e) => {
      e.preventDefault();
      console.log(e);
    }}
  >
    {num.val}
  </NavDropdown.Item>
));
const listItems_2 = dropdown_2.map((num) => (
  <NavDropdown.Item key={num.id} href={num.href}>
    {num.val}
  </NavDropdown.Item>
));
const listItems_3 = dropdown_3.map((num) => (
  <NavDropdown.Item key={num.id} href={num.href}>
    {num.val}
  </NavDropdown.Item>
));
const listItems_4 = dropdown_4.map((num) => (
  <NavDropdown.Item key={num.id} href={num.href}>
    {num.val}
  </NavDropdown.Item>
));
const listItems_5 = dropdown_5.map((num) => (
  <NavDropdown.Item key={num.id} href={num.href}>
    {num.val}
  </NavDropdown.Item>
));

export default Header;
