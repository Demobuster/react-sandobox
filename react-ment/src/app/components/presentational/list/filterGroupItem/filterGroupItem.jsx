import React from 'react';

class FilterGroupItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            title: props.item["facet-title"],
            selected: props.item.selected,
            values: props.item["facet-values"]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const currentState = this.state.selected;
        this.setState({ selected: !currentState });
    }
    
    render() {
        return (
            <li className="list-group-item">
                <div className="panel panel-default">
                    <a href="#" onClick={ this.handleClick }>
                      <div className="panel-heading">
                        <h3 className="panel-title">{ this.state.title }</h3>
                      </div>
                    </a>
                    <div className={"panel-body" + (this.state.selected ? "" : " collapse")}>
                        {
                            this.state.values.map(function(item, index) {
                                return (
                                    <div key={ index }>
                                        <input type='checkbox' name='link' value={ item.link } />
                                        <span> { item.label } ({ item.count })</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </li>
        );
    }
    
} 

export default FilterGroupItem;