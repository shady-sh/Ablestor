import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductTitle from "./Generator/ProductTitle";
import SearchBar from "./Generator/SearchBar";
import SeriesText from "./Generator/SeriesText";
import SeriesTitle from "./Generator/SeriesTitle";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Synology.css";

const syn_Uri =
  "https://www.ablestor.com/public/image/logo/thumb_logo_synology.png";

const Titles = [
  { title: "Synology FS Series" },
  { title: "Synology SA/UC Series" },
  { title: "Synology XS/XS+ Series" },
  { title: "Synology PLUS Series" },
  { title: "Synology Value Series" },
  { title: "Synology J Series" },
  { title: "Synology Expansion Unit" },
  { title: "Synology Ethernet Adapter" },
  { title: "Synology Ram Module" },
  { title: "Synology Adapter" },
  { title: "Synology Rail Kit" },
  { title: "Synology FAN Cooler" },
  { title: "Synology HDD Tray" },
  { title: "Synology Power Supply" },
  { title: "Synology License" },
  { title: "Synology Router" },
  { title: "Synology NVR Series" },
  { title: "Synology SAT5200" },
  { title: "Synology SNV3000" },
];

const synItems = [
  [
    {
      href: "https://www.ablestor.com/product/detail?item=783",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/FS6400.png",
      name: "FS6400",
      desc: (
        <>
          Intel Xeon Silver 4110 * 2 <br />8 코어 2.1(기본) / 3.0(터보) GHz 32
          GB DDR4 ECC RDIMM <br />
          기본 베이수:24bay <br />
          - RX1217sas를 이용하여 48bay까지 확장 <br />
          - RX2417sas를 이용하며 72bay까지 확장 <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=782",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/FS3400.png",
      name: "FS3400",
      desc: (
        <>
          Intel Xeon D-1541 <br />
          8 코어 2.1(기본) / 2.7(터보) GHz 16 GB DDR4 ECC RDIMM <br />
          기본 베이수: 24BAY <br />
          - RX1217sas를 이용하여 48bay까지 확장 <br />
          - RX2417sas를 이용하여 72bay까지 확장 <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=701",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/FS2017.png",
      name: "FS2017",
      desc: (
        <>
          Intel Xeon D-1541 <br />
          8 코어 2.1(기본) / 2.7(터보) GHz 16 GB DDR4 ECC RDIMM <br />
          (Max : 128GB) / 24bay <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=703",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/FS1018.png",
      name: "FS1018",
      desc: (
        <>
          Intel Pentium D1508 <br />
          듕러코어 2.2 GHz / 2.6(turbo) GHz 8 GB DDR4 ECC SO-DIMM <br />
          (Max : 32GB) / 12bay <br />
          *품질보증 : 5년
        </>
      ),
    },
  ],
  [
    {
      href: "https://www.ablestor.com/product/detail?item=828",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/SA3600.png",
      name: "SA3600",
      desc: (
        <>
          Intel Xeon D-156 12 코어 2.1(기본) / 2.7(터보) GHz 16 GB DDR4 ECC
          RDIMM 기본 베이수: 12bay <br />
          - RX1217sas를 이용하여 96bay까지 확장 <br />
          - RX2417sas를 이용하여 180bay까지 확장 <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=795",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/UC3200.png",
      name: "UC3200",
      desc: (
        <>
          Intel Xeon D-1521 <br />
          쿼드 코어 2.4GHz, 터보 부스트(최대 2.7GHz) <br />
          8 GB DDR4 ECC UDIMM <br />
          (Max: 64GB) / 12bay <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=781",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/SA3400.png",
      name: "SA3400",
      desc: (
        <>
          Intel Xeon D-1541 <br />
          8 코어 2.1(기본) / 2.7(터보) GHz 16 GB DDR4 ECC RDIMM <br />
          기본 베이수: 12bay <br />
          - RX1217sas를 이용하여 96bay까지 확장 <br />
          - RX2417sas를 이용하여 180bay까지 확장 <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=830",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/SA3200D.png",
      name: "SA3200D",
      desc: (
        <>
          Intel Xeon D-1521 <br />
          쿼드 코어 2.4(기본) / 2.7(터보) GHz <br />
          8 GB DDR4 ECC UDIMM <br />
          Max: 64 GB (16 GB x 4) <br />
          12bay (Max: 36bay) <br />
          *품질보증 : 5년
        </>
      ),
    },
  ],
  [
    {
      href: "https://www.ablestor.com/product/detail?item=851",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/DS1621xs+.png",
      name: "DS1621xs+",
      desc: (
        <>
          Intel Xeon D-1527 <br />
          4-core 2.2 (기본) / 2.7 (터보) GHz 8 GB DDR4 ECC SO-DIMM <br />
          32GB(16GBx2) <br />
          6bay Max: 16bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=3",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS4017xs+.png",
      name: "RS4017xs+",
      desc: (
        <>
          Intel Xeon D-1541 <br />
          옥타코어 2.1(기본) / 2.7(터보) GHz <br />
          8 GB DDR4 ECC UDIMM <br />
          Max: 64 GB (16 GB x 4) / <br />
          16bay (Max: 40bay) <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=695",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS3618xs.png",
      name: "RS3618xs",
      desc: (
        <>
          Intel Xeon D-1521 <br />
          쿼드 코어 2.4(기본) / 2.7(터보) GHz <br />
          8 GB DDR4 ECC UDIMM (Max : 64GB) <br />
          12bay <br />
          *품질보증 : 5년
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=705",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS2418RP+.png",
      name: "RS2418RP+",
      desc: (
        <>
          Intel Atom C3538 <br />
          쿼드 코어 2.1 GHz <br />
          4 GB DDR4 (Max : 64GB) <br />
          12bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=506",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/DS3018xs.png",
      name: "DS3018xs",
      desc: (
        <>
          Intel Pentium D1508 <br />
          듀얼 코어 2.2 GHz 2.2 (base) / 2.6 (turbo) GHz <br />
          8 GB DDR4 ECC SO-DIMM <br />
          32GB(16GBx2) <br />
          6bay Max:30bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=9",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/DS3617xs.png",
      name: "DS3617xs",
      desc: (
        <>
          Intel Xeon D-1527 <br />
          쿼드 코어 2.2 터보, 최대 2.7GHz 16GB DDR4 ECC SO-DIMM <br />
          Max: 48GB (16GB+16GB x 2) <br />
          12bay(Max: 36bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=751",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS1619xs+.png",
      name: "RS1619xs+",
      desc: (
        <>
          Intel Xeon D-1527 <br />
          쿼드 코어 2.2/2.7 GHz <br />
          8 GB DDR4 ECC UDIMM <br />
          Max: 64GB (16 GB x 4), <br />
          4bay(Max: 16bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=2",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS18017xs+.png",
      name: "RS18017xs+",
      desc: (
        <>
          Intel Xeon D-1531 <br />
          Six Core.2(base) / 2.7(turbo)GHz 16 GB DDR4 ECC RDIMM <br />
          Max: 128GB (32 GB x 4) <br />
          12bay(Max: 96bay or 180bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=4",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS3617xs+.png",
      name: "RS3617xs+",
      desc: (
        <>
          Intel Xeon D-1531 <br />
          헥사코어 2.2 터보 최대 2.7GHz <br />
          8 GB DDR4 ECC UDIMM <br />
          Max: 64 GB (16 GB x 4) <br />
          12bay(Max: 36bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=5",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS3617RPxs.png",
      name: "RS3617RPxs",
      desc: (
        <>
          Intel Xeon D-1521 <br />
          쿼드코어 2.4 터보 <br />
          최대 2.7GHz <br />
          8 GB DDR4 ECC UDIMM <br />
          Max: 64 GB (16 GB x 4) <br />
          12bay(MAx: 36bay)
        </>
      ),
    },
  ],
  [
    {
      href: "https://www.ablestor.com/product/detail?item=856",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS1221RP+.png",
      name: "RS1221RP+",
      desc: (
        <>
          AMD Ryzen™ V1500B <br />
          쿼드 코어 2.2GHz <br />
          4 GB DDR4 (MAX: 32 GB 16GBX2) <br />8 Bay (MAX: 12 Bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=855",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/RS1221+.png",
      name: "RS1221+",
      desc: (
        <>
          AMD Ryzen™ V1500B <br />
          쿼드 코어 2.2GHz <br />
          4 GB DDR4 (MAX: 32 GB 16GBX2) <br />8 Bay (MAX: 12 Bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=833",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/DS220+.png",
      name: "DS220+",
      desc: (
        <>
          Intel Celeron J4025 <br />
          2-core 2.0 (기본) / 2.9 (burst) GHz 2 GB DDR4 non-ECC <br />
          Max : 6GB(@GB + 4GB) <br />
          2bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=854",
      uri:
        "https://www.ablestor.com/public/image/product/Synology/thumb/DS1821+.png",
      name: "DS1821+",
      desc: (
        <>
          AMD RyzenTM V1500B quad-core 2.2 GHz <br />
          4 GB DDR4 ECC SODIMM <br />
          (expandable up to 32 GB) <br />
          bay : 기본 8bay ( max : 18bay )
        </>
      ),
    },
  ],
];

export default class Synology extends Component {
  modelList(_title, str) {
    return (
      <>
        <SeriesTitle title={_title} />
        <ul className="model_list models">{str}</ul>
      </>
    );
  }
  render() {
    return (
      <div>
        <Header />
        <Container className="page--product">
          <Row>
            <ProductTitle
              link="/Synology"
              uri="https://www.ablestor.com/public/image/logo/Synology.png"
              title="DiskStation / RackStation / FlashStation"
              text="고객님께 적합한 NAS를 확인해보세요."
            />
            <SearchBar />
            <Col className="collect" xs={12}>
              {synItems.map((v, i) => {
                return this.modelList(
                  Titles[i].title,
                  synItems[i].map((Item, idx) => {
                    return (
                      <SeriesText
                        key={idx}
                        href={Item.href}
                        logoUri={syn_Uri}
                        uri={Item.uri}
                        name={Item.name}
                        desc={Item.desc}
                      />
                    );
                  })
                );
              })}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
