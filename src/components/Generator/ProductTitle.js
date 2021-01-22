import { Component } from "react";
import { Col } from "react-bootstrap";

export default class ProductTitle extends Component {
  render() {
    return (
      <Col xs={12}>
        <p className="made_logo center">
          <a href={this.props.link}>
            <img src={this.props.uri} alt="Synology.png" />
          </a>
        </p>
        <h4 className="center">{this.props.title}</h4>
        <p className="center">{this.props.text}</p>
      </Col>
    );
  }
}
