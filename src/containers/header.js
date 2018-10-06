import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header';
import { hoverMainNav } from '../actions';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    hoverMainNav
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
