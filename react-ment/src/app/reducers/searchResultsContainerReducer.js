import { IN_PROGRESS } from '../actions/searchResultsContainerActions';

const INITIAL_STATE = {
    isSpinnerOn: false
};

const SearchResultsContainerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IN_PROGRESS: return { ...state, isSpinnerOn: true };
        default: return state;
    }
}

export default SearchResultsContainerReducer;