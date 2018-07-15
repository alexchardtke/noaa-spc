import { HOVER_MAP_NAV, IS_HOVERING_MAP_NAV } from '../constants';

export function hoverMapNav (id, currentId) {
  let popId = null;

  if (id !== currentId) popId = id;

  return {
    type: HOVER_MAP_NAV,
    hoveringMap: popId
  };
}

export const isHoveringMapNav = (id) => {
  return (dispatch, getState) => {
    dispatch(hoverMapNav(id, getState().hoveringMap));
  };
}
