import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.scss";

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

const first = [
  "회사명",
  "(주)에이블스토어",
  "주소",
  "서울특별시 영등포구 영신로 220 KnK디지털타워 1808호",
];

const second = [
  "사업자 등록번호 206-86-20608",
  "대표 권민길",
  "전화 02-456-7667",
  "팩스 02-456-7262",
];

const third = [
  "통신판매업신고번호 제2011-서울영등포-0761",
  "Copyright (주)에이블스토어. All Rights Reserved.",
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
              <p>
                {first.map((v, i) => {
                  return (
                    <span className="first-line" key={i}>
                      {v}
                    </span>
                  );
                })}
              </p>
              <p>
                {second.map((v, i) => {
                  return (
                    <span className="second-line" key={i}>
                      {v}
                    </span>
                  );
                })}
              </p>
              <p>
                {third.map((v, i) => {
                  return (
                    <span className="third-line" key={i}>
                      {v}
                    </span>
                  );
                })}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
