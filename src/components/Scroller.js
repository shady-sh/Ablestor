import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Scroller.css";

export default class Scroller extends Component {
  render() {
    return (
      <div className="page--content__site-map">
        <Container>
          <Row>
            <Col xs={12}>
              <p className="scoll-down">
                <img
                  src="https://www.ablestor.com/public/image/icon/Scroll-Down.png"
                  alt="Scroll-Down.png"
                />
                <span>{` `}마우스 클릭 시 사이트맵이 나옵니다.</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
