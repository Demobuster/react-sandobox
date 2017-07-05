import React from 'react';

const HeadingTitle = ({heading}) => { 
    return (<h1 className="display-1">{ heading }</h1>); 
};

HeadingTitle.propTypes = {
    heading: React.PropTypes.string
};

HeadingTitle.defaultProps = {
    heading: 'DEFAULT_HEADING_TITLE'
};

export default HeadingTitle;