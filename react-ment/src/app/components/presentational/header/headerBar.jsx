import React from 'react';
import Button from '../button/button'
import './header.css';

const HeaderBar = ({ buttons, onButtonClick, activeItemIndex }) => (
    <div className="masthead">
        <h3 className="text-muted">React Mentoring Project</h3>
        <nav>
            <ul className="nav nav-justified">
            { buttons.map(function(item, i) {
                return (
                    <li key={i} className={`${activeItemIndex === i ? 'active' : ''}`}>
                        <Button title={item.title} href={item.href} onClick={() => onButtonClick(i)}/>
                    </li>
                )
            })
            }
          </ul>
        </nav>
    </div>
)

export default HeaderBar;