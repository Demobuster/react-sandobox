import * from '../actions/filterActions';

const INITIAL_STATE = {
    checkboxesChecked: [],
    radioOn: [],
    reset: false
};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.types) {
        case actions.FILTER__CHECKBOX_CHECKED: return {
            ...state,
            checkboxesChecked: [...state.checkboxesChecked, action.data.optionId]
        };
        case actions.FILTER__CHECKBOX_UNCHECKED: return {
            ... state,
            checkboxesChecked: [
              ...state.checkboxesChecked.slice(0, action.data.optionId),
              ...state.checkboxesChecked.slice(action.data.optionId + 1)
            ]};
        case actions.FILTER__RADIO_ON: return {
            ...state,
            radioOn: [...state.radioOn, action.data.optionId]
        };
        case actions.FILTER__RADIO_OFF: return {
            ... state,
            radioOn: [
              ...state.radioOn.slice(0, action.data.optionId),
              ...state.radioOn.slice(action.data.optionId + 1)
            ]};
        case actions.FILTER__RESET: return { ...state, reset: true };
        default: return state;
    }
}