import PageHeader from "./components/PageHeader";
import Footer from "../Footer";
import "../../css/mypage/Dashboard.scss";
import { Container, Row, Col } from "react-bootstrap";

const chkList = [
  { desc: "회원 가입시 메뉴얼 다운로드 가능" },
  { desc: "전문 엔지니어와 1:1 문제 해결" },
  { desc: "에이블스토어 A/S 서비스 지원" },
];

const colGen = (description) => {
  return (
    <Row>
      <Col xs={12}>{description}</Col>
    </Row>
  );
};

const showList = (explain, key) => {
  return (
    <li key={key}>
      <i className="far fa-check-square">
        <span>{` ${explain}`}</span>
      </i>
    </li>
  );
};

const Dashboard = () => {
  return (
    <>
      <PageHeader />
      {/* <div className="main_body"> */}
      <div className="dashboard">
        <Container>
          {colGen(
            <>
              <h3>나의 대시보드</h3>
              <h5>
                ABLESTOR 회원 가입 또는 정품 등록 시 더 많은 서비스를 제공받으실
                수 있습니다.
              </h5>
            </>
          )}
          <ul className="check_list">
            {chkList.map((v, i) => {
              return showList(v.desc, i);
            })}
          </ul>
          <i className="fas fa-exclamation-circle" />
          <span>나의 대시보드에서 Mypage 정보 확인이 가능합니다.</span>
        </Container>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Dashboard;
