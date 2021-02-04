import { Component } from "react";
import SlickSlider from "../components/Slider";
import Footer from "../components/Footer";
import "../css/Reference.css";
import { Row, Col, Container } from "react-bootstrap";

const category = [
  { id: 1, file: "edu", name: "의료/교육기관", size: 44, maxSize: 49 },
  { id: 2, file: "company", name: "기업/금융/포탈", size: 53, maxSize: 56 },
  { id: 3, file: "public", name: "정부 및 공공기관", size: 29, maxSize: 35 },
  { id: 4, file: "media", name: "방송/미디어", size: 37, maxSize: 42 },
  { id: 5, file: "social", name: "종교/사회단체", size: 9, maxSize: 14 },
];

let items = [];

export default class Reference extends Component {
  state = {
    selectedContent: 1,
  };
  listCategory = () =>
    category.map((number) => (
      <li key={number.id}>
        <a
          href="/"
          className={
            this.state.selectedContent === number.id
              ? "category-active"
              : "category"
          }
          onClick={(e) => {
            e.preventDefault();
            this.setState({ selectedContent: number.id });
          }}
        >
          {number.name}
        </a>
      </li>
    ));
  addItems = () => {
    items = [];
    // category[this.state.selectedContent - 1].map((item) => {
    // if (this.state.selectedContent === item.id) {
    const item = category[this.state.selectedContent - 1];
    for (let i = 1; i <= item.maxSize; i++) {
      if (i > item.size) {
        items.push({ elements: <div /> });
      } else {
        items.push({
          elements: (
            <img
              className="img-sizing"
              src={`/refs/${item.file}_${i}.png`}
              alt={`${item.file}_${i}`}
            />
          ),
        });
      }
    }
    // }
    // return "";
    // });
    return this.list_eduItems();
  };
  list_eduItems = () => {
    return (
      <Row>
        {items.map((Item, idx) => (
          <Col key={idx}>{Item.elements}</Col>
        ))}
      </Row>
    );
  };
  render() {
    return (
      <div>
        <SlickSlider />
        <Container className="page--gap">
          <Row>
            <Col>
              <h3>에이블스토어 레퍼런스</h3>
              <ul className="reference_category">{this.listCategory()}</ul>
              <br />
              <br />
              {this.addItems()}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
