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

let edu_item = [];

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
  addEduItem = () => {
    edu_item = [];
    for (let i = 1; i <= 44; i++) {
      edu_item.push({
        id: i,
        Elements: (
          <img
            className="img-sizing"
            src={`/refs/edu_${i}.png`}
            alt={`edu_${i}`}
          />
        ),
      });
    }
    return this.list_eduItems();
  };

  list_eduItems() {
    return (
      <Container>
        <Row>
          {edu_item.map((Item) => {
            if (Item.id >= 1 && Item.id <= 7) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 8 && Item.id <= 14) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 15 && Item.id <= 21) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 22 && Item.id <= 28) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 29 && Item.id <= 35) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 36 && Item.id <= 42) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
            if (Item.id >= 43 && Item.id <= 49) {
              return <Col key={Item.id}>{Item.Elements}</Col>;
            }
          })}
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <SlickSlider />
        <div className="page--gap">
          <Container>
            <Row>
              <Col>
                <h3>에이블스토어 레퍼런스</h3>
                <ul className="reference_category">{this.listCategory()}</ul>
                <br />
                <br />
                {this.addEduItem()}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
