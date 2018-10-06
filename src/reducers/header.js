import { HOVER_MAIN_NAV } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case HOVER_MAIN_NAV:
      return {
        ...state,
        hoveringNav: action.hoveringNav
      };
    default:
      return state;
  }
};
