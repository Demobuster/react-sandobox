import { combineReducers } from 'redux';

import FilterReducer from './filterReducer';
import headerReducer from './headerReducer';
import SearchResultsContainerReducer from './searchResultsContainerReducer';

const rootReducer = combineReducers({
    FilterReducer,
    headerReducer,
    SearchResultsContainerReducer
});

export default rootReducer;