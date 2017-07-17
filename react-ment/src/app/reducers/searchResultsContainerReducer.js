import { SRP__CONTAINER_IN_PROGRESS } from '../actions/searchResultsContainerActions';

const INITIAL_STATE = {
    isSpinnerOn: false
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case actions.SRP__CONTAINER_IN_PROGRESS: return { ...state, isSpinnerOn: true };
        default: return state;
    }
}