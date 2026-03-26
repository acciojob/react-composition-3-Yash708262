import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
    return (
        <div>
            <Tooltip text="This is a tooltip">
                <h2>Hover over me</h2>
            </Tooltip>
            <Tooltip text="Another tooltip">
                <p>Hover over this text</p>
            </Tooltip>
        </div>
    );
};

export default App;