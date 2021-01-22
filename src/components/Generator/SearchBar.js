import { Component } from "react";
import { Form, Button } from "react-bootstrap";

let getValue;

export default class SearchBar extends Component {
  findString = (str) => {};
  render() {
    return (
      <div className="search">
        <Form>
          <Button variant="danger" className="search-button">
            검색
          </Button>
          <Form.Group className="search-bar">
            <Form.Control
              size="sm"
              type="text"
              onChange={(e) => (getValue = e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
