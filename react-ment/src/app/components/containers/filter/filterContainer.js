import { connect } from 'react-redux';
import Filter from '../../presentational/sidebar/filter';
import { REQUEST_SENT, makeCall } from '../../../actions/requestActions';

function mapStateToProps(state) {
    return {
        data: state.requestReducer.data,
        queryParams: state.requestReducer.queryParams
     };
}

function mapDispatchToProps(dispatch) {
    return {
        handleFormChange: (e) => {
            dispatch({
                type: REQUEST_SENT,
                param: {
                    name: e.target.name,
                    value: e.target.value
                }
            });
            makeCall(dispatch);
        }
    }
}

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer;