import { CLICK_PRODUCT_TAB } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CLICK_PRODUCT_TAB:
      return {
        ...state,
        activeProductTab: action.activeProductTab
      };
    default:
      return state;
  }
};
