import React from 'react';

const Button = ({ classNameString, href, title }) => {
    return ( <a className={classNameString} href={href}  role="button">{title}</a>);
};

Button.propTypes = {
    classNameString: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Button;