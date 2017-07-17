export const FILTER__CHECKBOX_CHECKED = 'FILTER__CHECKBOX_CHECKED';
export const FILTER__CHECKBOX_UNCHECKED = 'FILTER__CHECKBOX_UNCHECKED';

export const FILTER__RADIO_ON = 'FILTER__RADIO_ON';
export const FILTER__RADIO_OFF = 'FILTER__RADIO_OFF';

export const FILTER__RESET = 'FILTER__RESET';

export const makeChecked = optionId => ({ type: FILTER__CHECKBOX_CHECKED, data: optionId });
export const makeUnchecked = optionId => ({ type: FILTER__CHECKBOX_UNCHECKED, data: optionId });
export const radioOn = optionId => ({ type: FILTER__RADIO_ON, data: optionId });
export const radioOff = optionId => ({ type: FILTER__RADIO_OFF, data: optionId });