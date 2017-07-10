import React from 'react';
import BreadcrumbListItem from '../../presentational/list/breadcrumbListItem/breadcrumbListItem.jsx';

export default class Breadcrumb extends React.Component {
    
    render() {
        var names = ['One', 'Two', 'Three'];
        var namesList = names.map(function(name, i) {
            return <BreadcrumbListItem key={i} pageName={name}/>;
          });
          
        namesList.push(<BreadcrumbListItem key='3' isActive="active" pageName="Four"/>);
        return <ol className="breadcrumb">{ namesList }</ol>;
    }
}