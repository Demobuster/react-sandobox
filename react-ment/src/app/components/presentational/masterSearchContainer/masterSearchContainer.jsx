import React from 'react';
import ProductTile from './productTile/productTile';

const MainSearchContainer = (props) => {
    return (
        <div className="row">
            {props.products.map((item, index) => (
                <ProductTile key={index} prod={item.field}/>
            ))}
        </div>
    );
}

export default MainSearchContainer;