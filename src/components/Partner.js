import Header from "./Header";
import SlickSlider from "./Slider";
import Footer from "./Footer";
import "../css/Partner.css";
import { Row, Col, Container, Card, CardGroup } from "react-bootstrap";
import { Component } from "react";

export default class Partner extends Component {
  createCard = (img, title, address, sub_address, phone, fax) => {
    return (
      <Col xs={4} style={{ marginRight: "10px" }}>
        <Card>
          <Card className="card-image-bg">
            <Card.Img className="partner-image" variant="top" src={img} />
          </Card>
          <Card.Body>
            <Card.Title className="partner-cardtitle">
              {title}
              <hr />
            </Card.Title>
            <Card.Text className="partner-cardtext">
              {address}
              <br />
              {sub_address}
              <p style={{ marginTop: "10px" }}>
                <i className="fa fa-phone" />
                &nbsp;{phone}
                <i className="fas fa-fax" style={{ marginLeft: "12px" }} />
                &nbsp;{fax}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
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
                    <CardGroup>
                      {this.createCard(
                        `
                      https://www.ablestor.com/public/asset/svg/brand/AtecSystem.svg`,
                        `(주)에이텍시스템`,
                        `경기도 성남시 분당구 판교로 289`,
                        `(우 : 13488)`,
                        `1544-5510`,
                        `031-698-8512`
                      )}
                      {this.createCard(
                        `
                      https://www.ablestor.com/public/asset/svg/brand/bizmerce.svg`,
                        `비즈머스`,
                        `서울 서초구 강남대로 27길 7-19 JVM 빌딩 4F`,
                        `(우 : 06752)`,
                        `02-6253-0340`,
                        `02-6959-3671`
                      )}
                    </CardGroup>
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
