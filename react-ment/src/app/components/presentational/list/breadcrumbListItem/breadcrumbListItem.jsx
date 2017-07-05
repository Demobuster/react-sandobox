import React from 'react';

const BreadcrumbListItem = ({ isActive, pageName }) => 
    (
        <li className={"breadcrumb-item" + (isActive !== '' ? " active" : isActive)}>
            {pageName}
        </li>
    );

export default BreadcrumbListItem;