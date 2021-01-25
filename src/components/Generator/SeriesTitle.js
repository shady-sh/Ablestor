import { Component } from "react";
import "../../css/Generator/Series.css";

export default class SeriesTitle extends Component {
  render() {
    return <h4 className="series_title">{this.props.title}</h4>;
  }
}
