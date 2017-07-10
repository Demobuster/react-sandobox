import React from 'react';
import Button from '../button/button';

const ProductTile = (props) => {
    return (
        <div id={props.id} className="col-lg-4">
            <img className='img-circle' 
                    src={props.prod.href} 
                    alt={props.prod.prodName}  width='300' height='400' />
            <h2>{props.prod.prodName}</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. 
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            
            <div className="btn-group btn-group-justified" role="group">
                <Button classNameString={"btn btn-default"} href={"#"} title={"Quick View"}/>
                <Button classNameString={"btn btn-default"} href={"#"} title={"More.."}/>
            </div>
        </div>
        );
};
        
export default ProductTile;