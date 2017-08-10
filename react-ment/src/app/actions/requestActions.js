export const REQUEST_SENT = "REQUEST_SENT";
export const REQUEST_SUCCEEDED = "REQUEST_SUCCEEDED";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";

const FILTER_ENDPOINT_HOST = "http://api.canadiantire.ca/search/api/v0/product/en/";

export function toggleSpinner(isInProcess) {
    return {
        type: TOGGLE_SPINNER,
        isInProcess: isInProcess
    }
}

export function requestSucceeded(items) {
    return {
        type: REQUEST_SUCCEEDED,
        items
    }
}

export function makeCall(dispatch, query) {
    return (dispatch) => {
        dispatch(toggleSpinner(true));

        fetch(FILTER_ENDPOINT_HOST + query)
             .then(response => response.json())
             .then(json => dispatch(requestSucceeded(json)))
             .then(dispatch(toggleSpinner(false)));
    };
}