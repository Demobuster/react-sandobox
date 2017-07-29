import React from 'react';
import FilterGroupItem from '../list/filterGroupItem/filterGroupItem';
import './filter.css';

const Filter = ({ data, handleFormChange }) => {
    return (
        <div className="nav nav-sidebar">
            <form onChange={ handleFormChange }>
                <ul className="list-group">
                    { data.map(function(item, index) {
                        return <FilterGroupItem id={ index } item={ item } />;
                    })
                    }
                </ul>
            </form>
        </div>
    );
};

export default Filter;