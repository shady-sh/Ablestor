import { Component } from "react";
import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import Footer from "../components/Footer";
import "../css/Reference.css";
import { Row, Col, Container } from "react-bootstrap";

const category = [
  { id: 1, name: "의료/교육기관" },
  { id: 2, name: "기업/금융/포탈" },
  { id: 3, name: "정부 및 공공기관" },
  { id: 4, name: "방송/미디어" },
  { id: 5, name: "종교/사회단체" },
];

const eduItems = [];

export default class Reference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: 1,
    };
  }
  setClassName(id) {
    if (this.state.selectedContent === id) {
      return "category-active";
    } else {
      return "category";
    }
  }
  setSelectedContent(id) {
    this.setState({ selectedContent: id });
  }

  listCategory = () =>
    category.map((number) => (
      <li key={number.id}>
        <a
          href="/"
          className={this.setClassName(number.id)}
          onClick={(e) => {
            e.preventDefault();
            this.setSelectedContent(number.id);
          }}
        >
          {number.name}
        </a>
      </li>
    ));
  updateEduItems() {
    for (let i = 1; i <= 42; i++) {
      eduItems.push({
        id: i,
        Elements: (
          <Col>
            <img src="" alt={i}></img>
          </Col>
        ),
      });
    }
    return;
  }
  render() {
    return (
      <div>
        <Header />
        <SlickSlider />
        <div className="page--gap">
          <Container>
            <Row>
              <Col xs={12}>
                <h3>에이블스토어 레퍼런스</h3>
                <ul className="reference_category">{this.listCategory()}</ul>
                <br />
                <br />
                <Row />
                <Container>
                  <Row>
                    <Col>1{/* {this.updateEduItems()} */}</Col>
                    <Col>1</Col>
                    <Col>1</Col>
                    <Col>1</Col>
                    <Col>1</Col>
                    <Col>1</Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
