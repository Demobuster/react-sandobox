import React from 'react';

class FilterGroupItem extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        index: props.index,
        item: props.item,
        isActive: true
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      const currentState = this.state.isActive;
      this.setState({ isActive: !currentState }); 
    }
    
    render() {
      return (
        <li className="list-group-item">
          <div className="panel panel-default">
            <a href="#" onClick={ this.handleClick }>
              <div className="panel-heading">
                <h3 className="panel-title">{ this.props.item.headingTitle }</h3>
              </div>
            </a>
            <div className={"panel-body" + (this.state.isActive ? "" : " collapse")}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </li>
        );
    }
    
} 

export default FilterGroupItem;