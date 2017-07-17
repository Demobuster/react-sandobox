import { createStore } from 'react';

import { rootReducer } from './reducers/_rootReducer';

function configureStore(initialState) {
    const store = createStore(
            rootReducer,
            initialState
    );

    return store;
}

export default configureStore;
