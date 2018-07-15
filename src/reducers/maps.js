import { HOVER_MAP_NAV, IS_HOVERING_MAP_NAV } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case HOVER_MAP_NAV:
      return {
        ...state,
        hoveringMap: action.hoveringMap
      };
    case IS_HOVERING_MAP_NAV:
      return {
        ...state,
        isHoveringMapNav: action.isHoveringMapNav
      }
    default:
      return state;
  }
};
