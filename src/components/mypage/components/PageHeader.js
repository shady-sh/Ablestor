import Header from "../../Header";
import { Container, Row, Col } from "react-bootstrap";
import "../../../css/mypage/PageHeader.css";

const itemList = [
  { name: "대시보드", href: "/mypage/dashboard" },
  { name: "계정", href: "/mypage/account" },
  { name: "행사 이력", href: "/mypage/career" },
  { name: "주문", href: "/mypage/order" },
  { name: "기기", href: "/mypage/product" },
  { name: "나의 질문 관리", href: "/mypage/qna" },
];

const PageHeader = () => {
  return (
    <>
      <Header />
      <div className="mypage-sub-header">
        <Container>
          <Row>
            <Col xs={12}>
              <ul className="category">
                {itemList.map((v, i) => {
                  return (
                    <li key={i}>
                      <a href={v.href}>{v.name}</a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageHeader;
