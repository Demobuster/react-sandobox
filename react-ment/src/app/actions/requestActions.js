import $ from "jquery";
export const REQUEST_SENT = "REQUEST_SENT";
export const REQUEST_SUCCEEDED = "REQUEST_SUCCEEDED";
export const REQUEST_FAILED = "REQUEST_FAILED";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";

export function makeCall(dispatch, query) {
    return fetch("http://api.canadiantire.ca/search/api/v0/product/en/?format=json;index=product;lang=en;" + $.param(query) + ";site=ct;store=0259;x1=c.cat-level-1")
        .then(response => response.json())
        .then(json => dispatch({ type: REQUEST_SUCCEEDED, data: json }));
}