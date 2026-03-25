import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return React.cloneElement(children, {
    className: `tooltip ${children.props.className || ""}`,
    onMouseOver: handleMouseEnter,
    onMouseOut: handleMouseLeave,
    children: (
      <>
        {children.props.children}
        {show && <div>{text}</div>}
      </>
    ),
  });
};

export default Tooltip;