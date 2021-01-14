import { Component } from "react";
import { Col, Row } from "react-bootstrap";
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
                  개척하는 기업 <b>‘에이블스토어’</b>
                </p>
              </div>
              <div className="greet-image-wrapper">
                <div className="greet-image-square"></div>
                <div className="greet-image"></div>
              </div>
            </div>
            <div className="company-greet-wrapper">
              <div className="company-name-wrapper">
                <h1>ABLESTOR</h1>
              </div>
              <div className="company-context-wrapper">
                <p>
                  에이블은 유능한, <b>뛰어남</b>을 뜻하는 영어의 기원이며,
                  스토어는 저장이라는 뜻을 가집니다.
                  <br />
                  디지털 시대의 모든 데이터는 공유되고 저장되기에, 저희
                  에이블스토어는 디지털 컨텐츠를
                  <br />
                  생성, 공유, 저장에 있어서 뛰어난 실력을 발휘하여 상상을 현실화
                  하고자 하는 기업입니다.
                </p>
              </div>
            </div>
            <div className="vision-section">
              <Col xs={12}>
                <div className="vision-context-wrapper">
                  <h1>
                    <span>
                      <b>VISION</b>
                    </span>
                    <br />
                    최고를 향해 뛴다.
                  </h1>
                  <p>
                    에이블스토어는 스토리지 전문 기업이다.
                    <br />
                    회사를 설립한 2007년 대만 시놀로지와 국내 독점 계약을
                    체결하며 시장에 첫 발을 내디뎠다.
                    <br />
                    지난해에는 대만 아수스토어 제품도 독점 공급하며 시장
                    점유율을 늘려갔다.
                  </p>
                </div>
                <div className="vision-description-wrapper">
                  <Row>
                    <Col xs={4}>
                      <p>
                        스토리지는 단순 데이터 저장용도에 그치지 않는다.
                        <br /> 가정에서는 모든 가전을 연결하는 네트워크의
                        <br /> 중심에 서있다.
                        <br />
                        기업이나 공공기관에서도 정보검색 시스템,
                        <br /> 그룹웨어 및 문서관리 시스템, 모바일 솔루션과{" "}
                        <br />
                        서비스, 실시간 데이터 통합시스템 등에 빼놓을 수<br />{" "}
                        없는 핵심 분야다.
                        <br />
                        에이블스토어는 이 점을 놓치지 않았다.
                      </p>
                    </Col>
                    <Col xs={4}>
                      <p>
                        단순 스토리지 유통에 그치지 않고 연구개발과 질<br />{" "}
                        높은 서비스를 제공하는 고객관리 시스템을 <br />
                        운영했다. NAS(Network Attached Storage) <br />
                        DAS(Direct Attached Storage) SAN(Storage <br />
                        Area Network)에 이르는 다양한 솔루션을 준비해 <br />
                        고객이 원하는 맞춤
                        <br />
                        솔루션을 제공할 뿐 아니라 가상화와 감시솔루션에 <br />
                        이르기까지 데이터가 존재하는 곳에서는 어디서나
                      </p>
                    </Col>
                    <Col xs={4}>
                      <p>
                        활용도 높은 유연한 기술경쟁력을 갖췄다.
                        <br />
                        에이블스토어는 국내 SMB 시장에서 명실상부한 <br />
                        선두주자로 올라섰다. <br />
                        올 해 매출 목표는 100억원으로 잡았다. 올해는 <br />
                        수출에도 신경을 쓰기로 했다. <br />
                        아직 수출 비중은 5% 미만이지만 NAS에 다양한 <br />
                        솔루션을 결합한 융합제품으로 세계 시장에 <br />
                        도전한다.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="vision-image-wrapper">
                  <div className="vision-image-square"></div>
                  <div className="vision-image"></div>
                </div>
              </Col>
            </div>
            <div className="goal-section">
              <Col xs={12}>
                <div className="goal-context-wrapper">
                  <h1>
                    <span>
                      <b>GOAL</b>
                    </span>
                    <br />“ 국내에서 개발한 소프트웨어를
                    <br /> 10년 안에 TOP10 수준으로 <br />
                    끌어올리는 것이 목표입니다. ”
                  </h1>
                </div>
                <div className="goal-description-wrapper">
                  <Row>
                    <Col xs={12}>
                      <p>
                        권민길 에이블스토어 대표는 데이터가 존재하는 분야라면
                        어느 제품이든 스토리지를 연계해 시장 저변을 확대해
                        나가겠다는 포부다.
                        <br />
                        그동안 해외 제품을 국내에 들여와 공급했다면 이제는 그
                        제품에 국산 SW기술을 접목해 새로운 어플라이언스
                        제품(융합 제품)을 만들어 해외에 소개한다는
                        <br />
                        그림이다. “NAS는 기본적으로 네트워크다 보니 결합할 수
                        있는 것이 많다.”며 “CCTV와 스마트폰, 웹오피스, 영상회의
                        시스템등을 적용한 다양한 형태의
                        <br />
                        어플라이언스 제품으로 승부를 걸 계획”이라고 말했다.
                        <br />
                        <br />
                        글로벌화의 핵심은 에이블스토어의 선진화된 마케팅 능력과
                        최고의 핵심 인력, 안정적 재무구조와 인프라다. 그는
                        폭넓은 전략적 제휴와 글로벌 기업의 마케팅 기법을
                        활용함은 물론이고 IT 유통 비즈니스의 자신감과 공공기관 /
                        학내망 사업을 하며 쌓은 다양한 고객층이 뒷받침 해줄
                        것”이라고 설명했다.
                        <br />
                        권대표가 가진 또하나의 장점은 파트너의 성공을 위해
                        노력한다는 점이다
                        <br />
                        <br />
                        신뢰 기반의 파트너 프로그램은 분야별로 역량 있는
                        파트너를 발굴하고 육성해 급변하는 환경에서 지속적으로
                        성장하는 경쟁력있는 비즈니스 모델을 만드는데
                        <br />
                        기여한다. 권대표는 “사람의 가치를 최우선으로 생각하기
                        때문에 사람과 사람 사이에 맺는 인연을 중요시하고 이를
                        바탕으로 끈끈한 파트너십을 만들어가고 있다.”
                        <br />고 강조했다. 개인이 가진 역량과 힘을 더욱 확장할
                        수 있다는 권대표의 믿음이 매출 규모보다 적은 인원으로
                        회사를 이끌어가는 원동력이다.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="goal-image-wrapper">
                  <div className="goal-image-square"></div>
                  <div className="goal-image"></div>
                </div>
              </Col>
            </div>
            <div className="brand-section">
              <Row>
                <Col xs={12}>
                  <div className="brand-logo-wrapper">
                    <div className="brand-logo-label">
                      <p>Logo Identity</p>
                    </div>
                    <div className="brand-context-wrapper">
                      <div className="brand-logo-section">
                        <img
                          src="https://www.ablestor.com//public/image/company_introduce/able-white.png"
                          alt="able-white.png"
                        ></img>
                      </div>
                      <div className="brand-description-section">
                        <p>
                          전용 색상은 아래 범위와 같습니다.
                          <br />
                          입체형인 원색 표현을 기준으로 사용하되, 적용 환경에
                          따라 평면형의 별색 표현 또는 아래의 스펙트럼으로 활용
                          <br />할 수 있습니다. 특수한 목적에 따른 의도적인
                          명시도 조절을 한 경우를 제외하고는 배경과 명확하게
                          보이는 색상을 <br />
                          표현하는 것을 기본으로합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
