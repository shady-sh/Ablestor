import { Component } from "react";
import { Form, Button } from "react-bootstrap";

let getValue;

export default class SearchBar extends Component {
  findString = (str) => {
    window.find(str, false, true, true);
    window.find(str, false, true, true);
  };
  render() {
    return (
      <div className="search">
        <Form>
          <Button
            variant="danger"
            className="search-button"
            onClick={() => this.findString(getValue)}
          >
            검색
          </Button>
          <Form.Group className="search-bar">
            <Form.Control
              size="sm"
              type="text"
              onChange={(e) => (getValue = e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  this.findString(getValue, e);
                  e.preventDefault();
                }
              }}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
