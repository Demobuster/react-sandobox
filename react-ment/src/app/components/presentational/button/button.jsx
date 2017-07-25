import React from 'react';

const Button = (props) => {
    return <a className={props.classNameString} href={props.href} role="button" onClick={props.onClick}>{props.title}</a>;
};

export default Button;