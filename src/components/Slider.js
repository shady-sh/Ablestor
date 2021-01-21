import { Component } from "react";
import { CardGroup, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slider.css";

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImage: "slide0",
    };
    this.settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.getNextPage,
    };
  }

  getNextPage = (number) => {
    this.setState({ slideImage: `slide${number}` });
  };

  render() {
    return (
      <div className="Container">
        <Slider {...this.settings} className={this.state.slideImage}>
          {listItems}
        </Slider>
      </div>
    );
  }
}

const pStyles = [
  { color: "#333", fontSize: "18px", fontWeight: "400", zIndex: "5" },
  { color: "#eee", fontSize: "18px", fontWeight: "400", zIndex: "5" },
  { color: "#798691", fontSize: "18px", fontWeight: "500", zIndex: "5" },
  { color: "#555", fontSize: "16px", fontWeight: "400", zIndex: "5" },
  { color: "#fff", fontSize: "18px", fontWeight: "400", zIndex: "5" },
];
const hStyles = [
  {
    color: "#333",
    fontSize: "38px",
    fontWeight: "500",
    zIndex: "5",
    paddingBottom: "12px",
  },
  {
    color: "#eee",
    fontSize: "38px",
    fontWeight: "500",
    zIndex: "5",
    paddingBottom: "12px",
  },
  {
    color: "#798691",
    fontSize: "33px",
    fontWeight: "1000",
    zIndex: "5",
    paddingBottom: "12px",
  },
  {
    color: "#333",
    fontSize: "38px",
    fontWeight: "900",
    zIndex: "5",
    paddingBottom: "12px",
  },
  {
    marginTop: "9rem",
    marginLeft: "40rem",
    fontSize: "35px",
    fontWeight: "700",
  },
];
const liStyle = {
  marginLeft: "250px",
  marginTop: "100px",
};

const Items = [
  {
    id: 1,
    Elements: (
      <div>
        <img
          style={{
            position: "absolute",
            left: "45rem",
            width: "560px",
            zIndex: "10",
          }}
          src="https://www.ablestor.com/public/image/slider/DS1821+.png"
          alt="DS1821+"
        ></img>
        <li style={liStyle}>
          <h3 style={hStyles[0]}>DiskStation DS1821+</h3>
          <p style={pStyles[0]}>
            ㆍ<b style={{ fontWeight: "500" }}>AMD Ryzen</b> 쿼드코어{" "}
            <b style={{ fontWeight: "400" }}>656 MBps</b> 2.2GHz
          </p>
          <p style={pStyles[0]}>
            ㆍ<b style={{ fontWeight: "500" }}>4GB DDR4</b> 메모리(최대 32GB까지
            확장 가능)
          </p>
          <p style={pStyles[0]}>ㆍSynology DX517 확장유닛으로 </p>
          <p style={pStyles[0]}>
            <b style={{ fontWeight: "500" }}>최대 18Bay</b>확장 가능
          </p>
          <Button
            style={{ marginTop: "12px", width: "8rem" }}
            className="btn-default"
          >
            자세히보기
          </Button>
        </li>
      </div>
    ),
  },
  {
    id: 2,
    Elements: (
      <div>
        <li style={liStyle}>
          <h3 style={hStyles[1]}>DS1621xs+</h3>
          <br />
          <p style={pStyles[1]}>ㆍNVMe SSD를 지원하는 이중 M.2 2280 SSD</p>
          <p style={pStyles[1]}>
            ㆍ대역폭 집약 환경을 위해 기본 제공되는 10GBASE-T
          </p>
          <Button
            style={{ marginTop: "3rem", width: "8rem" }}
            variant="primary"
          >
            자세히보기
          </Button>
        </li>
        <img
          style={{
            position: "absolute",
            top: "4rem",
            left: "45rem",
            width: "540px",
            zIndex: "10",
          }}
          src="https://www.ablestor.com/public/image/slider/DS1621xs+.png"
          alt="DS1821+"
        ></img>
      </div>
    ),
  },
  {
    id: 3,
    Elements: (
      <div>
        <img
          style={{ marginLeft: "800px", marginTop: "150px", zIndex: "10" }}
          src="https://www.ablestor.com/public/image/slider/moss_slide_inner_1.png"
          alt="DS1821+"
        ></img>
        <Button
          style={{ marginTop: "1rem", marginLeft: "51rem" }}
          variant="outline-light"
        >
          자세히보기
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    Elements: (
      <div>
        <li style={liStyle}>
          <h3 style={hStyles[2]}>드디어 출시</h3>
          <p style={pStyles[2]}>ㆍ4K 온라인 트랜스 코딩이 포함된</p>
          <p style={pStyles[2]}>ㆍ고성능 올-라운드 NAS 제품군</p>
          <p style={pStyles[2]}>ㆍ성장하고 있는 기업에 이상적인 NAS</p>
        </li>
        <img
          style={{ position: "relative", left: "70rem", bottom: "10rem" }}
          src="https://www.ablestor.com/public/image/slider/Slider_14_logo.png"
          alt="synology"
        ></img>
        <img
          style={{ position: "relative", bottom: "8rem", left: "28rem" }}
          src="https://www.ablestor.com/public/image/slider/Slider_new_product.png"
          alt="DS1821+"
        ></img>
        <span style={{ position: "relative", left: "40rem", bottom: "23rem" }}>
          <Button
            style={{ height: "2rem", fontSize: "14px" }}
            variant="outline-secondary"
            size="sm"
          >
            DS920+
          </Button>
          <Button
            style={{
              marginLeft: "12rem",
              height: "2rem",
              fontSize: "14px",
            }}
            variant="outline-secondary"
            size="sm"
          >
            DS420+
          </Button>
          <Button
            style={{ marginLeft: "10rem", fontSize: "14px" }}
            variant="outline-secondary"
            size="sm"
          >
            DS220+
          </Button>
        </span>
      </div>
    ),
  },
  {
    id: 5,
    Elements: (
      <div>
        <li style={liStyle}>
          <h3 style={hStyles[3]}>RackStation RS1619xs+</h3>
          <p style={pStyles[3]}>
            ㆍ저장소를 확장할 수 있는 고성능 랙 마운트 4베이 NAS
          </p>
          <p style={pStyles[3]}>
            ㆍ쿼드 코어 CPU 및 8GB DDR4 UDIMM(64베이까지 확장 가능)
          </p>
          <p style={pStyles[3]}>
            ㆍNVMe/SATA SSD 캐시를 지원하는 이중 M.2 2280 슬롯
          </p>
          <p style={pStyles[3]}>ㆍ10GbE/25GbE NIC를 지원하는 PCIe 3.0 슬롯</p>
          <Button
            style={{ marginTop: "12px", width: "8rem" }}
            className="btn-default"
          >
            자세히보기
          </Button>
        </li>
        <img
          style={{
            position: "absolute",
            left: "40rem",
            top: "20rem",
            width: "560px",
            zIndex: "10",
          }}
          src="https://www.ablestor.com/public/image/slider/RS1619xs+.png"
          alt="DS1821+"
        ></img>
      </div>
    ),
  },
  {
    id: 6,
    Elements: (
      <div>
        <li style={{ marginLeft: "300px", marginTop: "110px" }}>
          <p style={pStyles[4]}>대규모 기업을 위한 강력 추천!</p>
          <p style={pStyles[4]}>
            가상화, 데이터 집중 응용 프로그램 및 지속적인 서비스를 위해
          </p>
          <p style={pStyles[4]}>설계된 확장성 높은 3U NAS</p>
          <h3 style={hStyles[4]}>RS4017xs+</h3>
          <a style={{ marginLeft: "40rem", color: "#f53f39" }} href="/">
            자세히 보기>
          </a>
        </li>
        <img
          style={{
            position: "absolute",
            left: "16rem",
            height: "19rem",
            top: "16rem",
            zIndex: "10",
          }}
          src="https://www.ablestor.com/public/image/slider/RS4017xs+.png"
          alt="DS1821+"
        ></img>
      </div>
    ),
  },
];
const listItems = Items.map((Item) => (
  <div key={Item.id}>
    <CardGroup className="slider_cover">
      <CardGroup className="cardgroup">{Item.Elements}</CardGroup>
    </CardGroup>
  </div>
));
