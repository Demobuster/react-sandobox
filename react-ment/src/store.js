import { createStore } from 'redux';
import rootReducer from './app/reducers/_rootReducer';

function configureStore(initialState) {
    const store = createStore(
            rootReducer,
            initialState
    );

    return store;
}

export default configureStore({});
