import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Maps from '../components/maps';
import { hoverMapNav, isHoveringMapNav } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hoverMapNav,
    isHoveringMapNav
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps);
