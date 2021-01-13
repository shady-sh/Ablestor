import { Component } from "react";
import { CardGroup } from "react-bootstrap";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="ftr">
        <CardGroup>
          <CardGroup className="cardgroup">
            <div className="row">
              <a href="/">
                <img
                  alt=""
                  src="https://www.ablestor.com/public/image/logo_white.png"
                />
              </a>
              <div className="textbox">
                <p className="link">{listItems}</p>
                <p>
                  <b>회사명</b>
                  <span>(주)에이블스토어</span>
                  <b>주소</b>
                  <span>
                    서울특별시 영등포구 영신로 220 KnK디지털타워 1808호
                  </span>
                </p>
                <p>
                  <b>사업자 등록번호</b>
                  <span>206-86-20608</span>
                  <b>대표</b>
                  <span>권민길</span>
                  <b>전화</b>
                  <span>02-456-7667</span>
                  <b>팩스</b>
                  <span>02-456-7262</span>
                </p>
                <p>
                  <b>통신판매업신고번호</b>
                  <span>제2011-서울영등포-0761</span>
                  <span>Copyright (주)에이블스토어. All Rights Reserved.</span>
                </p>
              </div>
            </div>
          </CardGroup>
        </CardGroup>
      </footer>
    );
  }
}

const linkList = [
  {
    id: "1",
    src: "https://www.ablestor.com/ablestor/introduce",
    name: "회사소개",
  },
  {
    id: "2",
    src: "/ablestor/provision",
    name: "서비스 이용약관",
  },
  {
    id: "3",
    src: "/ablestor/privacy",
    name: "개인정보 처리방침",
  },
  {
    id: "4",
    src: "/ablestor/viewPopup",
    name: "사업자정보확인",
  },
  {
    id: "5",
    src: "/proc/viewToMobile",
    name: "모바일로 보기",
  },
];
const listItems = linkList.map((number) => (
  <a
    className="colorstext"
    key={number.id}
    href={number.src}
    // onMouseEnter={() => {
    //     let color = '#FF3636';
    //     let el = document.getElementById('colorstext');
    //     el.style.color = color;
    // }}
    // onMouseLeave={() => {
    //     let white = '#FFFFFF';
    //     let el = document.getElementById('colorstext');
    //     el.style.color = white;
    // }}
  >
    {number.name}
  </a>
));
