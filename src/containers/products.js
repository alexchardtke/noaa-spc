import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from '../components/products';
import { clickedProductTab } from '../actions';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clickedProductTab
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
