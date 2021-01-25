import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductTitle from "./Generator/ProductTitle";
import SearchBar from "./Generator/SearchBar";
import SeriesTitle from "./Generator/SeriesTitle";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Synology.css";

export default class Synology extends Component {
  modelList = (elements) => {
    return <ul className="model_list models">{elements}</ul>;
  };

  fsSeries = () => {};
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
            <Col xs={12}>
              <SeriesTitle title="Synology FS Series" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
