import { connect } from 'react-redux';
import Filter from '../../presentational/sidebar/filter';
import requestSelectors from '../../../selectors/requestSelectors';
import { makeCall } from '../../../actions/requestActions';

function mapStateToProps(state) {
    return {
        queryParams: requestSelectors.getQueryParams(state),
        items: requestSelectors.getItems(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleFormChange: (e) => {
            const queryParams = e.target.value;
            dispatch(makeCall(dispatch, queryParams));
        }
    };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        items: (stateProps.items) ? stateProps.items.facets : ownProps.items,
        handleFormChange: e => dispatchProps.handleFormChange(e, stateProps.queryParams)
    };
};

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Filter);

export default FilterContainer;