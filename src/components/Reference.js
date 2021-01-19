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

let items = [];

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
  addItems = () => {
    items = [];
    if (this.state.selectedContent === 1) {
      for (let i = 1; i <= 49; i++) {
        if (i >= 45) {
          items.push({
            id: i,
            Elements: <div></div>,
          });
        } else {
          items.push({
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
      }
      return this.list_eduItems("Edu");
    } else if (this.state.selectedContent === 2) {
      for (let i = 3; i <= 60; i++) {
        if (i !== 10) {
          if (i >= 3 && i <= 9) {
            items.push({
              Elements: (
                <img
                  className="img-sizing"
                  src={`https://www.ablestor.com/public/image/reference/b/refer_0${i}.png`}
                  alt={`company_0${i}`}
                />
              ),
            });
          } else if (i >= 57) {
            items.push({
              Elements: <div></div>,
            });
          } else {
            items.push({
              Elements: (
                <img
                  className="img-sizing"
                  src={`https://www.ablestor.com/public/image/reference/b/refer_${i}.png`}
                  alt={`company_${i}`}
                />
              ),
            });
          }
        }
      }
      return this.list_eduItems("Company");
    } else if (this.state.selectedContent === 3) {
      for (let i = 1; i <= 35; i++) {
        if (i >= 30) {
          items.push({
            Elements: <div></div>,
          });
        } else {
          items.push({
            Elements: (
              <img
                className="img-sizing"
                src={`/refs/public_${i}.png`}
                alt={`public_${i}`}
              />
            ),
          });
        }
      }
      return this.list_eduItems("Public");
    } else if (this.state.selectedContent === 4) {
      for (let i = 1; i <= 42; i++) {
        if (i >= 38) {
          items.push({
            Elements: <div></div>,
          });
        } else {
          items.push({
            Elements: (
              <img
                className="img-sizing"
                src={`/refs/media_${i}.png`}
                alt={`media_${i}`}
              />
            ),
          });
        }
      }
      return this.list_eduItems("Media");
    } else if (this.state.selectedContent === 5) {
      for (let i = 1; i <= 14; i++) {
        if (i >= 10) {
          items.push({
            Elements: <div></div>,
          });
        } else {
          items.push({
            Elements: (
              <img
                className="img-sizing"
                src={`/refs/social_${i}.png`}
                alt={`social_${i}`}
              />
            ),
          });
        }
      }
      return this.list_eduItems("Social");
    }
  };

  list_eduItems(type) {
    if (type === "Edu") {
      return (
        <Container>
          <Row>
            {items.map((Item) => {
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
    if (type === "Company") {
      return (
        <Container>
          <Row>
            {items.map((Item, idx) => {
              if (idx >= 0 && idx <= 6) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 7 && idx <= 13) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 14 && idx <= 20) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 21 && idx <= 27) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 28 && idx <= 35) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 35 && idx <= 41) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 42 && idx <= 48) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 49 && idx <= 55) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
            })}
          </Row>
        </Container>
      );
    }
    if (type === "Public") {
      return (
        <Container>
          <Row>
            {items.map((Item, idx) => {
              if (idx >= 0 && idx <= 6) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 7 && idx <= 13) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 14 && idx <= 20) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 21 && idx <= 27) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 28 && idx <= 34) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
            })}
          </Row>
        </Container>
      );
    }
    if (type === "Media") {
      return (
        <Container>
          <Row>
            {items.map((Item, idx) => {
              if (idx >= 0 && idx <= 6) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 7 && idx <= 13) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 14 && idx <= 20) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 21 && idx <= 27) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 28 && idx <= 34) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 35 && idx <= 42) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
            })}
          </Row>
        </Container>
      );
    }
    if (type === "Social") {
      return (
        <Container>
          <Row>
            {items.map((Item, idx) => {
              if (idx >= 0 && idx <= 6) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
              if (idx >= 7 && idx <= 13) {
                return <Col key={idx}>{Item.Elements}</Col>;
              }
            })}
          </Row>
        </Container>
      );
    }
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
                {this.addItems()}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
