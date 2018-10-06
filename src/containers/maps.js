import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Maps from '../components/maps';
import { hoverMapNav } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hoverMapNav
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps);
