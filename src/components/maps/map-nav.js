import React, { Component } from 'react';
import { MAP_NAV_ITEMS } from '../../constants';

export default class MapNav extends Component {

  renderItemWithDivider(item, index) {
    const { isHoveringMapNav, active } = this.props
    const activeNav = active === index ? 'activeNav' : '';

    return (
      <li key={index} className="nav-item py-0">
        <a
          className={`nav-link py-0 ${activeNav}`}
          href="#"
          onMouseEnter={e => isHoveringMapNav(index)}
        >
            {item}
        </a>
        <span className="main-nav-divider py-0">|</span>
      </li>
    );
  }

  renderItem(item, index) {
    const { isHoveringMapNav, active } = this.props;

    const activeNav = active === index ? 'activeNav' : '';
    return (
      <li key={index} className="nav-item py-0">
        <a
          className={`nav-link py-0 ${activeNav}`}
          href="#"
          onMouseEnter={e => isHoveringMapNav(index)}
        >
          {item}
        </a>
      </li>
    );
  }

  renderMapNavItems() {
    return MAP_NAV_ITEMS.map((item, index) => {
      return item.hasDivider ? this.renderItemWithDivider(item.item, index) : this.renderItem(item.item, index);
    });
  }

  render() {
    return (
      <div className="map-nav-wrapper">
        <ul className="map-nav-list navbar-dark nav">
          {this.renderMapNavItems()}
        </ul>
      </div>
    );
  }
}
