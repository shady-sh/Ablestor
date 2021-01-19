import Header from "./Header";
import SlickSlider from "./Slider";
import Footer from "./Footer";
import "../css/Partner.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Component } from "react";

export default class Partner extends Component {
  render() {
    return (
      <div>
        <Header />
        <SlickSlider />
        <div className="main_body">
          <div className="page--gap">
            <Container>
              <Row>
                <Col xs={12}>
                  <header className="p-header">
                    <h2>조달 사업</h2>
                    <span>에이블스토어 조달 사업 파트너</span>
                  </header>
                  <div className="partner_wrapper">
                    <Col xs={4} className="partner_content"></Col>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
