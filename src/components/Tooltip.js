import React, { useState } from "react";
import './../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: [
      children.props.children,
      show ? <div key="tooltip">{text}</div> : null,
    ],
  });
};

export default Tooltip;