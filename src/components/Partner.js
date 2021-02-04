import SlickSlider from "./Slider";
import Footer from "./Footer";
import "../css/Partner.css";
import { Row, Col, Container, Card, CardGroup } from "react-bootstrap";
import { Component } from "react";

// const exCardItems = [
//   {
//     title: {name: "조달 사업", desc: "에이블스토어 ㅁㄴㅇㄻㄴㅇㄹ"},
//     items: [
//       {
//         path: "https://www.atecsystem.kr/main/main.php",
//         img: "https://www.ablestor.com/public/asset/svg/brand/AtecSystem.svg",
//         title: "(주)에이텍시스템",
//         address: "경기도 성남시 분당구 판교로 289",
//         sub_address: "(우 : 13488)",
//         phone: "1544-5510",
//         fax: "031-698-8512",
//       },
//       {
//         path: "http://www.bizmerce.com/",
//         img: "https://www.ablestor.com/public/asset/svg/brand/bizmerce.svg",
//         title: "비즈머스",
//         address: "서울 서초구 강남대로 27길 7-19 JVM 빌딩 4F",
//         sub_address: "(우 : 06752)",
//         phone: "02-6959-3671",
//       },
//     ]
//   }
// ]

// exCardItems.map((v,i) => {
//   return (
//     <>
//     <p>{v.title.name}</p>
//     <p>{v.title.desc}</p>
//     <div>
//       {v.items.map((item,index) => {
//         return (

//         )
//       })}
//     </div>
//     </>
//   )
// })

const cardItems = [
  [
    { name: "조달 사업", desc: "에이블스토어 조달 사업 파트너" },
    {
      path: "https://www.atecsystem.kr/main/main.php",
      img: "https://www.ablestor.com/public/asset/svg/brand/AtecSystem.svg",
      title: "(주)에이텍시스템",
      address: "경기도 성남시 분당구 판교로 289",
      sub_address: "(우 : 13488)",
      phone: "1544-5510",
      fax: "031-698-8512",
    },
    {
      path: "http://www.bizmerce.com/",
      img: "https://www.ablestor.com/public/asset/svg/brand/bizmerce.svg",
      title: "비즈머스",
      address: "서울 서초구 강남대로 27길 7-19 JVM 빌딩 4F",
      sub_address: "(우 : 06752)",
      phone: "02-6959-3671",
    },
  ],
  [
    { name: "공식 총판", desc: "에이블스토어 공식 총판사" },
    {
      path: "https://map.naver.com/v5/entry/place/33576074",
      img: "https://www.ablestor.com/public/image/partner/comland.png",
      title: "(주)컴랜드시스템",
      address: "서울 용산구 청파로 101",
      sub_address: "(한강로3가, 나진상가11동 1층 가열 112호)",
      phone: "070-4640-3028",
    },
    {
      path: "http://digitalgnt.co.kr/default/",
      img: "https://www.ablestor.com/public/asset/svg/brand/Digitalgnt.svg",
      title: "디지탈지앤티",
      address: "서울시 용산구 청파로 132, 나진상가 19동 2층",
      sub_address: "나열 특 1호",
      phone: "02-711-2132",
      fax: "02-711-2133",
    },
  ],
  [
    { name: "파트너사", desc: "에이블스토어 제품 공식 인증 대리점" },
    {
      path: "https://www.n3ncloud.co.kr/",
      img: "https://www.ablestor.com/public/asset/svg/brand/n3ncloud.svg",
      title: "(주)엔쓰리엔클라우드",
      address: "서울 금천구 가산디지털1로 233",
      sub_address: "에이스하이엔드타워 9차 1310호",
      phone: "02-1599-4855",
    },
    {
      path: "http://www.h1system.com/",
      img: "https://www.ablestor.com/public/image/partner/h1system.gif",
      title: "에이치원시스템 주식회사",
      address: "서울특별시 영등포구 선유로 13길 25",
      sub_address: "(문래동6가, 에이스하이테크시티2) 913호",
      phone: "02-2633-5043",
      fax: "02-2633-5045",
    },
    {
      path: "http://3score.co.kr/",
      img: "https://www.ablestor.com/public/image/partner/3s_core.gif",
      title: "(주)쓰리에스코어",
      address: "서울시 금천구 서부샛길 648 13층, 1303호(가",
      sub_address: "산동, 대륭테크노타운 6차)",
      phone: "070-4297-3986",
      fax: "02-2658-1803",
    },
    {
      path: "http://www.iikr.co.kr/",
      img: "https://www.ablestor.com/public/image/partner/interikorea.png",
      title: "인터아이코리아(주)",
      address: "서울특별시 서초구 서초중앙로12길 27",
      sub_address: "(서초동, 인터아이빌딩)",
      phone: "02-3471-1515",
      fax: "02-3471-1548",
    },
  ],
];

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
        <Card className="card-gen">
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
        <SlickSlider />
        <Container className="page--gap">
          <Row>
            {cardItems.map((v, i) => {
              return (
                <Col xs={12} key={i}>
                  {this.createHeader(v[0].name, v[0].desc)}
                  <CardGroup className="partner_wrapper">
                    {cardItems[i].map((items, idx) => {
                      if (idx > 0) {
                        return this.createCard(
                          items.path,
                          items.img,
                          items.title,
                          items.address,
                          items.sub_address,
                          items.phone,
                          items.fax
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </CardGroup>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
