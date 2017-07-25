export const CHECKBOX_CHECKED = 'CHECKBOX_CHECKED';
export const CHECKBOX_UNCHECKED = 'CHECKBOX_UNCHECKED';

export const RADIO_ON = 'RADIO_ON';

export const RESET_FILTER = 'RESET_FILTER';

export const makeChecked = optionId => ({ type: CHECKBOX_CHECKED, data: optionId });
export const makeUnchecked = optionId => ({ type: CHECKBOX_UNCHECKED, data: optionId });
export const radioOn = optionId => ({ type: RADIO_ON, data: optionId });