import * as actions from '../actions/headerActions';

const INITIAL_STATE = {
    activeItemIndex: 0
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actions.ACTIVATE_BUTTON: {
            return { ...state, activeItemIndex: action.activeItemIndex };
        }

        default: return state;
    }
}