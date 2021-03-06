import * as actions from '../actions/filterActions';

const INITIAL_STATE = {
    checkboxesChecked: [],
    radioOn: [],
    reset: false
};

const FilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.CHECKBOX_CHECKED: return {
            ...state,
            checkboxesChecked: [...state.checkboxesChecked, action.data.optionId]
        };
        case actions.CHECKBOX_UNCHECKED: return {
            ...state,
            checkboxesChecked: state.checkboxesChecked.filter(elt => elt.optionId !== action.data.optionId)
        };
        case actions.RADIO_ON: return {
            ...state,
            radioOn: [...state.radioOn, action.data.optionId]
        };
        case actions.RESET_FILTER: return { ...state, reset: true };
        default: return state;
    }
};

export default FilterReducer;