import * as actions from '../actions/requestActions';

const INITIAL_STATE = {
    data: {},
    queryParams: {
        q: 'hats',
        q1: null,
        q2: null
    }
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actions.REQUEST_SENT: {
            const updated = state.queryParams;
            return { ...state, queryParams: updated};
        }
        case actions.REQUEST_SUCCEEDED: {
            return { ...state, data: action.data };
        }

        default: return state;
    }
}