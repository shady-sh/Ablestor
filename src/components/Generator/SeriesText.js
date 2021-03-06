import { Component } from "react";
import "../../css/Generator/Series.scss";

export default class SeriesText extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>
          <div className="image_wrap">
            <img
              className="made_logo"
              src={this.props.logoUri}
              alt="thumb_logo_synology.png"
            />
            <img
              className="model_image NAS"
              src={this.props.uri}
              alt="series"
            />
          </div>
          <p className="model_name">{this.props.name}</p>
          <p className="model_desc">{this.props.desc}</p>
        </a>
      </li>
    );
  }
}
