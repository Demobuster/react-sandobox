import React from 'react';
import $ from "jquery";
import FilterGroupItem from '../list/filterGroupItem/filterGroupItem';
import './filter.css';

const Filter = ({ items, handleFormChange }) => {
    return (
        <div className="nav nav-sidebar">
            <form onChange={ handleFormChange } >

                <ul className="list-group">
                    {
                        items.map(function(item, index) {
                            if (!$.isEmptyObject(item)) {
                                return <FilterGroupItem key={ index } item={ item } />;
                            }
                        })
                    }
                </ul>
            </form>
        </div>
    );
};

export default Filter;