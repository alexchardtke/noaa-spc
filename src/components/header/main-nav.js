import React, { Component } from 'react';
import { MAIN_NAV_ITEMS } from '../../constants';

export default class MainNav extends Component {
  renderItemWithDivider(item) {
    return (
      <li key={item} className="nav-item py-0">
        <a className="nav-link py-0" href={`#${item}`}>{item}</a>
        <span className="main-nav-divider py-0">|</span>
      </li>
    )
  }

  renderItem(item) {
    return (
      <li key={item} className="nav-item">
        <a className="nav-link py-0" href={`#${item}`}>{item}</a>
      </li>
    );
  }

  renderMainNavItems() {
    return MAIN_NAV_ITEMS.map(item => {
      return item.hasDivider ? this.renderItemWithDivider(item.item) : this.renderItem(item.item);
    });
  }
  render() {

    return (
      <div className="main-nav-wrapper">
        <ul className="navbar-dark nav nav-fill">
          {this.renderMainNavItems()}
          <form className="form-inline my-2 my-lg-0">
            <input className="main-nav-searchbar form-control form-control-sm mr-sm-2 py-0" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </ul>
      </div>
    );
  }
}
