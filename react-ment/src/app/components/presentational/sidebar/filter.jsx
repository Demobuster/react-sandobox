import React from 'react';
import FilterGroupItem from '../list/filterGroupItem/filterGroupItem';
import './filter.css';

const Filter = ({ data }) => {
    return (
        <div className="nav nav-sidebar">
            <ul className="list-group">
                { data.map(function(item, index) {
                    return <FilterGroupItem id={ index } item={ item } />;
                })
                }
            </ul>
        </div>
    );
};

export default Filter;