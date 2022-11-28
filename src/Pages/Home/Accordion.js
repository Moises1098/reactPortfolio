import React, { useState } from 'react';
import Down from './arrows/down.png';
import Up from './arrows/up.png';

import './List.css'

const down = <img src={Down} className="arrow" height="10" alt='down arrow' />;
const up = <img src={Up} className="arrow" height="10" alt='up arrow' />;



const Accordion1 = ({ title, content, contentl2 }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion1-item">
            <div className="accordion1-title" onClick={() => setIsActive(!isActive)}>
                <div className='check'>{title}</div>
                <div className='check'>{isActive ? down : up}</div>
            </div>
            {isActive && <div className="accordion1-content">{content}</div>}
        </div>
    );
};

export default Accordion1;