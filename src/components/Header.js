import { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'normalize.css'
import '../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false}
    }
    handleOpen = () => {
        this.setState( { isOpen: true })
    }

    handleClose = () => {
        this.setState( { isOpen: false })
    }
    render() {
        const dropdown_1 = [
            {href:'/', val:'회사소개'},
            {href:'/', val:'공지사항'},
            {href:'/', val:'뉴스/미디어 소식'},
            {href:'/', val:'레퍼런스'},
            {href:'/', val:'파트너'},
            {href:'/', val:'프로모션'},
            {href:'/', val:'견적/구매 관련 문의'},
        ]
        const dropdown_2 = [
            {href:'/', val:'Synology'},
            {href:'/', val:'G-technology'},
            {href:'/', val:'Asustor'},
            {href:'/', val:'Dahua'},
            {href:'/', val:'HDD'},
        ]
        const dropdown_3 = [
            {href:'/', val:'mommoss'},
            {href:'/', val:'pentaARK'},
            {href:'/', val:'CMS'},
            {href:'/', val:'포인트락'},
        ]
        const dropdown_4 = [
            {href:'/', val:'견적/구매 관련 문의'},
            {href:'/', val:'기술 교육 세미나'},
            {href:'/', val:'정품 등록 및 확인'},
            {href:'/', val:'정품 등록 오류 문의'},
            {href:'/', val:'동영상 강좌'},
            {href:'/', val:'자주 묻는 질문'},
            {href:'/', val:'다운로드 센터'},
            {href:'/', val:'자가 진단 서비스'},
            {href:'/', val:'기술 상담 문의'},
            {href:'/', val:'입고 수리 신청'},
            {href:'/', val:'서비스 정책'},
        ]
        const dropdown_5 = [
            {href:'/', val:'로그인'},
        ]
        const listItems_1 = dropdown_1.map((num) => 
            <NavDropdown.Item href={num.href}>{num.val}</NavDropdown.Item>
        )
        const listItems_2 = dropdown_2.map((num) => 
            <NavDropdown.Item href={num.href}>{num.val}</NavDropdown.Item>
        )
        const listItems_3 = dropdown_3.map((num) => 
            <NavDropdown.Item href={num.href}>{num.val}</NavDropdown.Item>
        )
        const listItems_4 = dropdown_4.map((num) => 
            <NavDropdown.Item href={num.href}>{num.val}</NavDropdown.Item>
        )
        const listItems_5 = dropdown_5.map((num) => 
            <NavDropdown.Item href={num.href}>{num.val}</NavDropdown.Item>
        )


        return (
            <header>
                <Navbar sticky="top" bg="black" variant="black">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://www.ablestor.com/public/image/logo_white.png"
                            style={{padding: "100px"}}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="m-auto navc">
                        <NavDropdown title="회사정보" id="1" onMouseEnter={e => {
                            this.currID = e.target.id;
                        }}>
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

export default Header;