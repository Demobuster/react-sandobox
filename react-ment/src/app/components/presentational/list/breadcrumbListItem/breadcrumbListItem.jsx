import React from 'react';

const BreadcrumbListItem = (props) =>
    (
        <li className={"breadcrumb-item" + (props.isActive !== '' ? " active" : props.isActive)}>
            {props.pageName}
        </li>
    );

export default BreadcrumbListItem;