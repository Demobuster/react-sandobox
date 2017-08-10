import * as actions from '../actions/requestActions';

const INITIAL_STATE = {
    items: null,
    queryParams: null
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actions.REQUEST_SENT: {
            const updated = state.queryParams;
            return { ...state, queryParams: updated };
        }
        case actions.REQUEST_SUCCEEDED: {
            return { ...state, items: action.items };
        }

        default: return state;
    }
}