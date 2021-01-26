import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductTitle from "./Generator/ProductTitle";
import SearchBar from "./Generator/SearchBar";
import SeriesText from "./Generator/SeriesText";
import SeriesTitle from "./Generator/SeriesTitle";
import TabGenerator from "./Generator/TabGenerator";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Synology.css";

const syn_Uri =
  "https://www.ablestor.com/public/image/logo/thumb_logo_synology.png";

const Titles = [
  { title: "Synology FS Series", tag: 1 },
  { title: "Synology SA/UC Series", tag: 2 },
  { title: "Synology XS/XS+ Series", tag: 1 },
  { title: "Synology PLUS Series", tag: 3 },
  { title: "Synology Value Series", tag: 4 },
  { title: "Synology J Series", tag: 5 },
  { title: "Synology Expansion Unit", tag: 6 },
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
  [
    {
      href: "https://www.ablestor.com/product/detail?item=786",
      name: "DS620slim",
      desc: (
        <>
          Intel Celeron J3355 <br />
          듀얼코어 2.0 burst up to 2.5 GHz <br />
          2GB DDR3L (Max: 6GB) <br />
          6bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=608",
      name: "DS218",
      desc: (
        <>
          Realtek RTD1296 <br />
          쿼드코어 1.4 GHz <br />
          2 GB DDR 4 <br />
          2bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=507",
      name: "DS118",
      desc: (
        <>
          Realtek RTD 1296 <br />
          쿼드코어 1.4GHz <br />
          1GB DDR4 <br />
          1bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=509",
      name: "DS218play",
      desc: (
        <>
          Realtek RTD 1296 <br />
          쿼드코어 1.4GHz <br />
          1GB DDR4 <br />
          2bay
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=493",
      name: "DS418",
      desc: (
        <>
          Realtek RTD1926 <br />
          쿼드코어 1.4GHz <br />
          2GB DDR4 <br />
          4bay
        </>
      ),
    },
  ],
  [
    {
      href: "https://www.ablestor.com/product/detail?item=829",
      name: "DS420j",
      desc: (
        <>
          Realtek RTD1296 <br />
          쿼드 코어 1.4 GHz <br />
          1 GB DDR4 <br />
          4bay(드라이브 확장 불가)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=832",
      name: "DS220j",
      desc: (
        <>
          Realtek RTD1296 <br />
          쿼드 코어 1.4 GHz <br />
          512MB DDR4 <br />
          2bay(드라이브 확장 불가)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=794",
      name: "DS120j",
      desc: (
        <>
          Marvell A3720 <br />
          듀얼 코어 800 Mhz <br />
          512MB DDR 3L <br />
          1bay(드라이브 확장 불가)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=780",
      name: "DS419slim",
      desc: (
        <>
          Marvell Armada 385 88F6820 <br />
          듀얼 코어 1.33 GHz <br />
          512MB DDR3L <br />
          4bay(드라이브 확장 불가)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=742",
      name: "DS119j",
      desc: (
        <>
          Marvell A3720 <br />
          듀얼 코어 800 Mhz <br />
          256MB DDR 3L <br />
          1bay(드라이브 확장 불가)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=487",
      name: "DS418j",
      desc: (
        <>
          Realtek RTD1293 <br />
          듀얼 코어 1.4 GHz <br />
          1 GB DDR4 <br />
          4bay(드라이브 확장 불가)
        </>
      ),
    },
  ],
  [
    {
      href: "https://www.ablestor.com/product/detail?item=849",
      name: "FX2421",
      desc: (
        <>
          24bay 확장유닛 <br /> <br />
          지원 모델 : <br />
          FS 시리즈 : FS6400, FS3600, <br />
          FS3400
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=222",
      name: "RX1217RP",
      desc: (
        <>
          12Bay 확장 유닛 <br /> <br />
          적용 모델 : <br />
          RS1619xs+, RS4017xs+ <br />
          RS3617xs+, RS3617RPxs <br />
          RS3617xs, RS3614xs+ <br />
          RS3614(RP)xs, RS2416(RP)+ <br />
          RS2414(RP)+, RS3413xs+ <br />
          RS3412(RP)xs, RS3411(RP)xs <br />
          RS2212(RP)+, RS2211(RP)+ <br />
          (12bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=56",
      name: "RX1217",
      desc: (
        <>
          12Bay 확장 유닛 <br /> <br />
          적용 모델 : <br />
          RS1619xs+, RS4017xs+ <br />
          RS3617xs+, RS3617RPxs <br />
          RS3617xs, RS3614xs+ <br />
          RS3614(RP)xs, RS2416(RP)+ <br />
          RS2414(RP)+, RS3413xs+ <br />
          RS3412(RP)xs, RS3411(RP)xs <br />
          RS2212(RP)+, RS2211(RP)+ <br />
          (12bay)
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=541",
      name: "RX1217sas",
      desc: (
        <>
          12Bay 확장 유닛 <br /> <br />
          지원 모델 : <br />
          FS3017, FS2017, RS18017xs+
        </>
      ),
    },
    {
      href: "https://www.ablestor.com/product/detail?item=691",
      name: "RX2417sas",
      desc: (
        <>
          24Bay 확장 유닛 <br /> <br />
          지원 모델 : <br />
          FS3017, FS2017, RS18017xs+
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
            <TabGenerator
              btns={
                <>
                  <Col>Area</Col>
                </>
              }
            />
            <Col className="collect" xs={12}>
              {synItems.map((v, i) => {
                return this.modelList(
                  Titles[i].title,
                  synItems[i].map((Item, idx) => {
                    let _uri = `https://www.ablestor.com/public/image/product/Synology/thumb/${Item.name}.png`;
                    return (
                      <SeriesText
                        key={idx}
                        href={Item.href}
                        logoUri={syn_Uri}
                        uri={_uri}
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
