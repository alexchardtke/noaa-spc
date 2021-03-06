import { HOVER_MAP_NAV } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case HOVER_MAP_NAV:
      return {
        ...state,
        hoveringMap: action.hoveringMap
      };
    default:
      return state;
  }
};
