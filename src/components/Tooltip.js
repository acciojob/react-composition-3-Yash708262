import React from "react";
import Tooltip from "./Tooltip";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = (e) => {
    setShow(true);
    if (children.props.onMouseEnter) {
      children.props.onMouseEnter(e);
    }
  };

  const handleMouseLeave = (e) => {
    setShow(false);
    if (children.props.onMouseLeave) {
      children.props.onMouseLeave(e);
    }
  };

  return React.cloneElement(children, {
    className: `tooltip ${children.props.className || ""}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: (
      <>
        {children.props.children}
        {show && <div>{text}</div>}
      </>
    ),
  });
};

export default Tooltip;