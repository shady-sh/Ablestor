import { Component } from "react";
import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import Footer from "../components/Footer";
import "../css/Introduce.css";

export default class Introduce extends Component {
  render() {
    return (
      <div>
        <Header />
        <SlickSlider />
        <div className="container">
          <div className="row">
            <div className="greet-section">
              <div className="desc1">
                <h1>
                  인간과 기술
                  <br />
                  <b>그리고 </b>가능성을 믿어라
                </h1>
                <p>
                  인간과 기술 그리고 가능성을 열어가며 성장성 있는 사업분야를
                  <br />
                  개척하는 기업<b>‘에이블스토어’</b>
                </p>
              </div>
              <div className="greet-image-wrapper">
                <div className="greet-image-square"></div>
                <div className="greet-image"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
