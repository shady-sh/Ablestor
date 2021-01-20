import Header from "../components/Header";
import Slider from "react-slick";
import SlickSlider from "../components/Slider";
import Footer from "../components/Footer";
import "../css/Home.css";
import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CardGroup, Card } from "react-bootstrap";

const grayLine = <hr style={{ width: "6rem" }} />;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class Home extends Component {
  createImage = (href, imgSrc) => {
    return (
      <li className="item image_item">
        <a href={href}>
          <img src={imgSrc} alt="image_icon.png"></img>
        </a>
      </li>
    );
  };
  createIcon = (href, imgSrc, title) => {
    return (
      <li className="item icon_item">
        <a href={href}>
          <img src={imgSrc} alt="list_icon"></img>
          <span>{title}</span>
        </a>
      </li>
    );
  };
  itemWrapper = () => {
    return (
      <div className="item_wrapper">
        <ul>
          {this.createImage(
            `/ablestor/kakao`,
            `https://www.ablestor.com/public/image/Main/icon_kakao.png`
          )}
          {this.createIcon(
            `/Introduce`,
            `https://www.ablestor.com/public/image/Main/main_icon_01.svg`,
            `ABLE 회사소개`
          )}
          {this.createIcon(
            `/Introduce`,
            `https://www.ablestor.com/public/image/Main/main_icon_02.svg`,
            `ABLE 뉴스&미디어`
          )}
          {this.createIcon(
            `/Reference`,
            `https://www.ablestor.com/public/image/Main/main_icon_03.svg`,
            `ABLE 레퍼런스`
          )}
        </ul>
      </div>
    );
  };
  promotionDesc = () => {
    return (
      <div className="promotion-desc">
        <h3>
          ABLE <b>EVENT</b>
        </h3>
        <p>ABLESTOR에서 진행하는 다양한</p>
        <p>이벤트 및 행사를 보실 수 있는 공간입니다.</p>
        <p>에이블스토어에서 제공해드리는 특별한 혜택들!</p>
        <p>놓치지 마시고 지금 확인해보세요.</p>
        <br />
        <br />
        <Button variant="outline-dark" style={{ width: "60%" }}>
          자세히 보기
        </Button>
      </div>
    );
  };

  createSlideCard = (imgSrc, textType, title, desc) => {
    return (
      <Card className="content-item">
        <a href="/">
          <Card.Img variant="top" src={imgSrc} />
          <Card.Body>
            <Card.Text>{textType}</Card.Text>
            <h5>{title}</h5>
            {grayLine}
            <p>{desc}</p>
          </Card.Body>
        </a>
      </Card>
    );
  };
  contentSlider = () => {
    return (
      <Slider className="content-slider" {...settings}>
        <div>
          <CardGroup>
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5fc705358d480.png`,
              `프로모션/이벤트`,
              `[ABLESTOR] 하트라이브 출연기념! 시놀로지 NAS 판매 이벤트`,
              `하트라이브!`
            )}
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5fc5f21555924.png`,
              `프로모션/이벤트`,
              `Synology 2021 online conference`,
              `시놀로지의 차세대 제품과 솔루션 소개`
            )}
          </CardGroup>
        </div>
        <div>
          <CardGroup>
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5fa50aad952d0.png`,
              `프로모션/이벤트`,
              `[ABLESTOR] THE K-DA 데이터 컨퍼런스 2020 & EXPO`,
              `THE K-DA 데이터 컨퍼런스 2020 & EXPO`
            )}
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5f4722a6e85cd.png`,
              `프로모션/이벤트`,
              `[ABLESTOR] Synology X 하이마트 온라인 단독 보상판매`,
              `Synology X 하이마트`
            )}
          </CardGroup>
        </div>
        <div>
          <CardGroup>
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5ee06b60ae129.png`,
              `프로모션/이벤트`,
              `에이블스토어 로드쇼 2020 온라인 안내.`,
              `에이블스토어 로드쇼 2020`
            )}
            {this.createSlideCard(
              `https://www.ablestor.com/public/upload/writePromotion/5ebdf8adb2ff8.png`,
              `프로모션/이벤트`,
              `시놀로지 20년도 신제품 출시! 더 빠르고 안정적으로`,
              `Synology 신제품 출시!`
            )}
          </CardGroup>
        </div>
      </Slider>
    );
  };

  createinfCard = (imgSrc, path, title, text) => {
    return (
      <Card style={{ width: "21rem" }}>
        <a href={path} target="_blank" rel="noreferrer">
          <Card.Img variant="top" src={imgSrc} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    );
  };
  infCard = () => {
    return (
      <Row style={{ marginTop: "0px" }}>
        <Col xs={4}>
          {this.createinfCard(
            `https://www.ablestor.com/public/image/Main/Information_01.png`,
            `https://demo.synology.com/ko-kr`,
            `DSM 라이브 데모`,
            `수상 경력의 NAS OS인 DiskStation Manager(DSM)를 지금 사용해 보세요!`
          )}
        </Col>
        <Col xs={4}>
          {this.createinfCard(
            `https://www.ablestor.com/public/image/Main/Information_02.png`,
            `https://www.synology.com/ko-kr/beta`,
            `Synology 베타 프로그램`,
            `Synology의 응용 프로그램을 최적화하고 개선할 수 있도록 도와주세요.`
          )}
        </Col>
        <Col xs={4}>
          {this.createinfCard(
            `https://www.ablestor.com/public/image/Main/Information_03.png`,
            `https://www.ablestor.com/guide/ransomware?type=info`,
            `랜섬웨어 보호 방법`,
            `효율적인 랜섬웨어를 보호하는 방법은 무엇이 있을까요?`
          )}
        </Col>
      </Row>
    );
  };

  createHelpCard = (title, desc_1, desc_2, desc_3, desc_4, btn) => {
    if (desc_4 === "") {
      desc_4 = <br />;
    }
    return (
      <Col xs={6}>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {grayLine}
            <p>{desc_1}</p>
            <p>{desc_2}</p>
            <p>{desc_3}</p>
            <p>{desc_4}</p>
            <br />
            <Button variant="outline-danger">{btn}</Button>
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
        {/* <Slides/> */}
        <div className="page--main">
          <div className="page--content__company">
            <Container>
              <Row>
                <Col xs={12}>{this.itemWrapper()}</Col>
              </Row>
            </Container>
          </div>
          <div className="page--content__promotion">
            <Container>
              <Row>
                <Col xs={4}>{this.promotionDesc()}</Col>
                <Col xs={8}>{this.contentSlider()}</Col>
              </Row>
            </Container>
          </div>
          <div className="page--content__notice">
            <Container>
              <Row>
                <Col xs={12}>
                  <h3>
                    ABLE <b>INFORMATION</b>
                  </h3>
                </Col>
              </Row>
              {this.infCard()}
              <Row className="bar">
                <Col xs={12}>
                  <a
                    href="https://cafe.naver.com/synologynas"
                    target="_blank"
                    rel="noreferrer"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="page--content__help">
            <Container>
              <Row>
                {this.createHelpCard(
                  `견적/구매 관련 문의`,
                  `기업 규모와 활용도에 적합한 맞춤형 진단이 필요하십니까?`,
                  `사내 네트워크 환경에 알맞는 스토리지 솔루션이 필요하십니까?`,
                  `관공서 납품등 기업에서의 제품 구입 상담을 요청하십시오.`,
                  `담당자가 신속히 연락드리겠습니다.`,
                  `견적 및 구매 관련 요청`
                )}
                {this.createHelpCard(
                  `전문가 상담 신청`,
                  `제품 이용에 궁금한 사항이 있으신가요?`,
                  `NAS 전문 엔지니어가 실시간으로 대기중입니다.`,
                  `전문가 상담 신청으로 문제점을 해결해보세요.`,
                  ``,
                  `전문가 상담 신청하기`
                )}
              </Row>
            </Container>
          </div>
          <div className="page--content__information">
            <Container>
              <Row>
                <Col xs={7}>
                  <h3>계좌안내</h3>
                  <p>
                    <span>기업은행, 예금주 : (주)에이블스토어</span>
                  </p>
                  <p className="element-group">
                    <span>
                      계좌번호 : <b>2007-2009-00</b>
                    </span>
                    <span>E-Mail : sales@ablestor.com</span>
                    <img
                      className="ibk_logo"
                      src="https://www.ablestor.com/public/image/logo/IBK_logo.png"
                      alt="IBK_logo.png"
                    />
                  </p>
                </Col>
                <Col xs={5}></Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
