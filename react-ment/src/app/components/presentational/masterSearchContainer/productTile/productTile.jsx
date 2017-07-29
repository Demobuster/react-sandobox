import React from 'react';
import Button from '../../button/button';

const ProductTile = (props) => {
    return (
        <div id={props.id} className="col-lg-4">
            <img className='img-circle' 
                    src={props.prod["thumb-img-url"]} 
                    alt={props.prod["prod-name"]}  width='300' height='400' />
            <h2>{props.prod["prod-name"]}</h2>
            <p>{props.prod.features}</p>
            
            <div className="btn-group btn-group-justified" role="group">
                <Button classNameString={"btn btn-default"} href={props.prod["short-pdp-url"]} title={"Quick View"}/>
                <Button classNameString={"btn btn-default"} href={props.prod["pdp-url"]} title={"More.."}/>
            </div>
        </div>
        );
};
        
export default ProductTile;