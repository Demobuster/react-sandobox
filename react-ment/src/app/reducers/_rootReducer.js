import { combineReducers } from 'redux';

import requestReducer from './requestReducer';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
    requestReducer,
    headerReducer
});

export default rootReducer;