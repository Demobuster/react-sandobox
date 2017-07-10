import React from 'react';

const Button = (props) => {
    return <a className={props.classNameString} href={props.href}  role="button">{props.title}</a>; 
};

export default Button;