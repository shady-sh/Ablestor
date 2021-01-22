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
    } else if (this.state.selectedContent === 2) {
      for (let i = 3; i <= 59; i++) {
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
              Elements: <div />,
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
    }
    return this.list_eduItems();
  };

  list_eduItems() {
    return (
      <Row>
        {items.map((Item, idx) => (
          <Col key={idx}>{Item.Elements}</Col>
        ))}
      </Row>
    );
  }

  render() {
    var items = [];
    for (let index = 0; index < 44; index++) {
      items[index] = index;
    }

    var jsxStr = "";
    {
      <div>col</div>;
    }

    return (
      <div>
        {/* {items.map((number) => {
          return (
            <div>
              
              {number % 7 === 0 && <div>row</div>}

              
            </div>
          );
        })} */}
        <Header />
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
