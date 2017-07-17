import * as actions from '../actions/headerActions';

const INITIAL_STATE = {
    activeButtonIndex: 0
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actions.HEADER__ACTIVATE_BUTTON: return { ...state, activeButtonIndex: action.data.activeIndex }
        default: return state;
    }
}