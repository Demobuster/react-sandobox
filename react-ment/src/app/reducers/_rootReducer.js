import { combineReducers } from 'redux';

import { filterReducer } from './reducers/filterReducer';
import { headerReducer } from './reducers/headerReducer';
import { searchResultsContainerReducer } from './reducers/searchResultsContainerReducer';

const rootReducer = combineReducers({
    filterReducer,
    headerReducer,
    searchResultsContainerReducer
});

export default rootReducer;