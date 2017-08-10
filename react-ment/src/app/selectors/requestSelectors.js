export default {
    getQueryParams(state) {
        return state.requestReducer.queryParams;
    },
    getItems(state) {
        return state.requestReducer.items;
    }
};