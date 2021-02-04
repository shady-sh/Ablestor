import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.scss";

const footItems = [
  {
    className: "first-line",
    items: [
      "회사명 : (주)에이블스토어",
      "주소 : 서울특별시 영등포구 영신로 220 KnK디지털타워 1808호",
    ],
  },
  {
    className: "second-line",
    items: [
      "사업자 등록번호 206-86-20608",
      "대표 권민길",
      "전화 02-456-7667",
      "팩스 02-456-7262",
    ],
  },
  {
    className: "third-line",
    items: [
      "통신판매업신고번호 제2011-서울영등포-0761",
      "Copyright (주)에이블스토어. All Rights Reserved.",
    ],
  },
];

const linkList = [
  {
    src: "/introduce",
    name: "회사소개",
  },
  {
    src: "/ablestor/provision",
    name: "서비스 이용약관",
  },
  {
    src: "/ablestor/privacy",
    name: "개인정보 처리방침",
  },
  {
    src: "/ablestor/viewPopup",
    name: "사업자정보확인",
  },
  {
    src: "/proc/viewToMobile",
    name: "모바일로 보기",
  },
];

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={2}>
              <a href="/">
                <img
                  src="https://www.ablestor.com/public/image/logo_white.png"
                  alt="logo"
                />
              </a>
            </Col>
            <Col xs={10} className="push-1">
              <p className="link">
                {linkList.map((v, i) => (
                  <a key={i} href={v.src}>
                    {v.name}
                  </a>
                ))}
              </p>
              {footItems.map((v, i) => {
                return (
                  <p key={i}>
                    {v.items.map((item, idx) => {
                      return (
                        <span className={v.className} key={idx}>
                          {item}
                        </span>
                      );
                    })}
                  </p>
                );
              })}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
