import React from "react";
import { Row } from "react-bootstrap";

const TabGenerator = (props) => {
  return (
    // <ul className="model_category models Synology"></ul>
    <>
      <Row>{props.btns}</Row>
    </>
  );
};

export default TabGenerator;
