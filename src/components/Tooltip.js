import React from "react";
import Tooltip from "./Tooltip";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Clone the child to inject the hover listeners and the tooltip div
  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    // We nest the tooltip div INSIDE the cloned child
    children: (
      <>
        {children.props.children}
        {show && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
