import { HOVER_MAP_NAV, CLICK_PRODUCT_TAB, HOVER_MAIN_NAV } from '../constants';

export function hoverMapNav (id) {
  return {
    type: HOVER_MAP_NAV,
    hoveringMap: id
  };
}

export function hoverMainNav (id) {
  console.log('nav id', id);
  return {
    type: HOVER_MAIN_NAV,
    hoveringNav: id
  }
}

export function clickedProductTab (id) {
  return {
    type: CLICK_PRODUCT_TAB,
    activeProductTab: id
  }
}
