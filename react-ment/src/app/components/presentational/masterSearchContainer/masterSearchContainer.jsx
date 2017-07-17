import React from 'react';
import ProductTile from './productTile/productTile';

class MainSearchContainer extends React.Component {

    render() {
        return (
            <div className="row">
                {this.props.products.map((item, index) => (
                    <ProductTile key={index} prod={item}/>
                ))}
            </div>
        );
    }
}

export default MainSearchContainer;