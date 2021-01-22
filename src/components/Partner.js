import Header from "./Header";
import SlickSlider from "./Slider";
import Footer from "./Footer";
import "../css/Partner.css";
import { Row, Col, Container, Card, CardGroup } from "react-bootstrap";
import { Component } from "react";

export default class Partner extends Component {
  createHeader = (name, desc) => {
    return (
      <header className="p-header">
        <h2>{name}</h2>
        <span>{desc}</span>
      </header>
    );
  };
  createCard = (path, img, title, address, sub_address, phone, fax) => {
    const path_url = path;
    return (
      <Col xs={4}>
        <Card style={{ marginRight: "10px", marginBottom: "15px" }}>
          <Card className="card-image-bg">
            <Card.Img
              className="partner-image"
              variant="top"
              src={img}
              onClick={() => window.open(path_url, "_blank")}
            />
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
                {fax !== undefined ? (
                  <i className="fas fa-fax" style={{ marginLeft: "12px" }} />
                ) : (
                  <></>
                )}
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
        <Container className="page--gap">
          <Row>
            <Col xs={12}>
              {this.createHeader(`조달 사업`, `에이블스토어 조달 사업 파트너`)}
              <CardGroup className="partner_wrapper">
                {this.createCard(
                  `https://www.atecsystem.kr/main/main.php`,
                  `https://www.ablestor.com/public/asset/svg/brand/AtecSystem.svg`,
                  `(주)에이텍시스템`,
                  `경기도 성남시 분당구 판교로 289`,
                  `(우 : 13488)`,
                  `1544-5510`,
                  `031-698-8512`
                )}
                {this.createCard(
                  `http://www.bizmerce.com/`,
                  `https://www.ablestor.com/public/asset/svg/brand/bizmerce.svg`,
                  `비즈머스`,
                  `서울 서초구 강남대로 27길 7-19 JVM 빌딩 4F`,
                  `(우 : 06752)`,
                  `02-6959-3671`
                )}
              </CardGroup>
            </Col>
            <Col xs={12}>
              {this.createHeader(`공식 총판`, `에이블스토어 공식 총판사`)}
              <CardGroup className="partner_wrapper">
                {this.createCard(
                  `https://map.naver.com/v5/entry/place/33576074`,
                  `https://www.ablestor.com/public/image/partner/comland.png`,
                  `(주)컴랜드시스템`,
                  `서울 용산구 청파로 101`,
                  `(한강로3가, 나진상가11동 1층 가열 112호)`,
                  `070-4640-3028`
                )}
                {this.createCard(
                  `http://digitalgnt.co.kr/default/`,
                  `https://www.ablestor.com/public/asset/svg/brand/Digitalgnt.svg`,
                  `디지탈지앤티`,
                  `서울시 용산구 청파로 132, 나진상가 19동 2층`,
                  `나열 특 1호`,
                  `02-711-2132`,
                  `02-711-2133`
                )}
              </CardGroup>
            </Col>
            <Col xs={12}>
              {this.createHeader(
                `파트너사`,
                `에이블스토어 제품 공식 인증 대리점`
              )}
              <CardGroup className="partner_wrapper">
                {this.createCard(
                  `https://www.n3ncloud.co.kr/`,
                  `https://www.ablestor.com/public/asset/svg/brand/n3ncloud.svg`,
                  `(주)엔쓰리엔클라우드`,
                  `서울 금천구 가산디지털1로 233`,
                  `에이스하이엔드타워 9차 1310호`,
                  `02-1599-4855`
                )}
                {this.createCard(
                  `http://www.h1system.com/`,
                  `https://www.ablestor.com/public/image/partner/h1system.gif`,
                  `에이치원시스템 주식회사`,
                  `서울특별시 영등포구 선유로 13길 25`,
                  `(문래동6가, 에이스하이테크시티2) 913호`,
                  `02-2633-5043`,
                  `02-2633-5045`
                )}
                {this.createCard(
                  `http://3score.co.kr/`,
                  `https://www.ablestor.com/public/image/partner/3s_core.gif`,
                  `(주)쓰리에스코어`,
                  `서울시 금천구 서부샛길 648 13층, 1303호(가`,
                  `산동, 대륭테크노타운 6차)`,
                  `070-4297-3986`,
                  `02-2658-1803`
                )}
                {this.createCard(
                  `http://www.iikr.co.kr/`,
                  `https://www.ablestor.com/public/image/partner/interikorea.png`,
                  `인터아이코리아(주)`,
                  `서울특별시 서초구 서초중앙로12길 27`,
                  `(서초동, 인터아이빌딩)`,
                  `02-3471-1515`,
                  `02-3471-1548`
                )}
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
