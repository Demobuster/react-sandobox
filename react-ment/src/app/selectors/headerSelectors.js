export default {
    getActiveItemIndex(state) {
        return { activeItemIndex: state.headerReducer.activeItemIndex };
    }
};