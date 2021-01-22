import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Scroller.css";

export default class Scroller extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    // this.getItems()
  }
  clickHandle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  clickImg = (_class) => {
    return (
      <a
        className={_class}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          this.clickHandle();
        }}
      >
        <img
          src="https://www.ablestor.com/public/image/icon/Scroll-Down.png"
          alt="Scroll-Down.png"
        />
      </a>
    );
  };

  createTitle = (width, title) => {
    return (
      <td style={{ width: `${width}` }}>
        <h4>{title}</h4>
      </td>
    );
  };
  navList = (href, name) => {
    return (
      <li>
        <a href={href}>{name}</a>
      </li>
    );
  };

  stateView = () => {
    if (this.state.isOpen === false) {
      return (
        <div className="page--content__site-map">
          <Row>
            <Col xs={12}>
              <p className="scoll-down">
                {this.clickImg()}
                <span>{` `}마우스 클릭 시 사이트맵이 나옵니다.</span>
              </p>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="page--content__site-map active">
          {this.clickImg("img-repos")}
          <Container style={{ marginTop: "-60px" }}>
            <Row>
              <Col xs={12}>
                <table className="sitemap">
                  <tbody>
                    <tr>
                      {this.createTitle("15%", "Ablestor")}
                      {this.createTitle("15%", "Synology")}
                      {this.createTitle("15%")}
                      {this.createTitle("15%")}
                      {this.createTitle("20%", "HDD")}
                      {this.createTitle("20%", "네트워크 장비")}
                    </tr>
                    <tr className="content-row">
                      <td>
                        <ul>
                          {this.navList(`/Introduce`, `회사소개`)}
                          {this.navList(`/News`, `뉴스미디어`)}
                          {this.navList(`/Reference`, `레퍼런스`)}
                          {this.navList(`/Partner`, `파트너`)}
                          {this.navList(`/Promotion`, `프로모션`)}
                          {this.navList(`/`, `공지사항`)}
                          {this.navList(`/`, `견적/구매문의`)}
                        </ul>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  };

  render() {
    return this.stateView();
  }
}
