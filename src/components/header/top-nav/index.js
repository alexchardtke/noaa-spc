import React, { Component } from 'react';
import { TOP_NAV_ITEMS } from '../../../constants';

export default class TopNav extends Component {
  renderNavItems() {
    return TOP_NAV_ITEMS.map((item, index) => {
      return (
        <li key={index} className="nav-item active top-nav-list-item">
          <a className="nav-link py-0" href={`#${item.item}`}>{item.item}</a>
        </li>
      )
    });
  }
  render() {
    return (
      <nav className="top-nav-wrapper navbar navbar-expand-lg navbar-dark py-0">
        <a className="navbar-brand py-0" href="#">SPC - NOAA</a>
        <ul className="navbar-nav ml-auto">
          {this.renderNavItems()}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="top-nav-searchbar form-control form-control-sm mr-sm-2 py-0" type="search" placeholder="Local Forecast for ZIP" aria-label="Search" />
        </form>
      </nav>
    );
  }
}
