import React, { Component } from 'react';
import MainNavItem from './main-nav-item';
import { MAIN_NAV_ITEMS } from '../../constants';

export default class MainNav extends Component {

  renderMainNavItems() {
    return MAIN_NAV_ITEMS.map((item, index) => {
      return <MainNavItem key={index} item={item} index={index}/>
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
