import React from 'react';

import './filter.css';

const Filter = () => {
    return (
        <ul className="nav nav-sidebar">
            <li className="active"><a href="#">Overview </a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
    )
};

export default Filter;