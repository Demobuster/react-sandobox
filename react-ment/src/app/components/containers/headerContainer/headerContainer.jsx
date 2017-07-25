import { connect } from 'react-redux';
import HeaderBar from '../../presentational/header/headerBar';
import { ACTIVATE_BUTTON } from '../../../actions/headerActions';
import HeaderSelectors from '../../../selectors/headerSelectors';

function mapStateToProps(state) {
    return HeaderSelectors.getActiveItemIndex(state);
}

function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: id => {
            dispatch({ type: ACTIVATE_BUTTON, activeItemIndex: id });
        }
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBar)

export default HeaderContainer;