import React from 'react';
import FilterGroupItem from '../list/filterGroupItem/filterGroupItem';
import './filter.css';

const Filter = ({ items, handleFormChange, data }) => {
    return (
        <div className="nav nav-sidebar">
            <form onChange={ handleFormChange }>
                <ul className="list-group">
                    { items.map(function(item, index) {
                        return <FilterGroupItem id={ index } item={ item } />;
                    })
                    }
                </ul>
            </form>
        </div>
    );
};

export default Filter;