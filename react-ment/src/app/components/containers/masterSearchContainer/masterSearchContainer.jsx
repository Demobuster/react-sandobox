import React from 'react';

export default class MainSearchContainer extends React.Component {

    render() {
        var products = ["One", "Two", "Three", "Four", "Five", "Six"];
        var tileArray = products.map(function(product, i) {
                        return <div id={i} className="col-md-4">{product}</div>;
                    });

        return <div className="row">{tileArray}</div>;
    }
}