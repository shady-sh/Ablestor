import { Component } from "react";
import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import Footer from "../components/Footer";
import "../css/Reference.css";
import { Row, Col } from "react-bootstrap";

export default class Reference extends Component {
  render() {
    return (
      <div>
        <Header />
        <SlickSlider />
        <div className="page--gap">
          <div className="container">
            <Row>
              <Col xs={12}>
                <h3>에이블스토어 레퍼런스</h3>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
