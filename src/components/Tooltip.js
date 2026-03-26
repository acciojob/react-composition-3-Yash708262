import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isVisible && <div className="tooltiptext">{text}</div>}
        </div>
    );
};

export default Tooltip;