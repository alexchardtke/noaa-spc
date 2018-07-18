import { HOVER_MAP_NAV, CLICK_PRODUCT_TAB } from '../constants';

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
    dispatch(hoverMapNav(id, getState().maps.hoveringMap));
  };
}

export function clickedProductTab (id) {
  return {
    type: CLICK_PRODUCT_TAB,
    activeProductTab: id
  }
}
