import { connect } from 'react-redux';
import Filter from '../../filter/filter';

function mapStateToProps(state) {
    
}

function mapDispatchToProps(dispatch) {
    return {}
}

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer;