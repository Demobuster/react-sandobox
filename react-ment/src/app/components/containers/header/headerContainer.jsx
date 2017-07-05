import React from 'react';
import './header.css';

export default class HeaderContainer extends React.Component {
    
    render() {
        return (
            <div className="masthead">
                <h3 className="text-muted">Project name</h3>
                <nav>
                  <ul className="nav nav-justified">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
            </div>
        );   
    }
}