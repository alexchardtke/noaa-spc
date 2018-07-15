import React, { Component } from 'react';
import Banner from './banner';
import TopNav from './top-nav';
import MainNav from './main-nav';

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <TopNav />
        <Banner />
        <MainNav />
      </div>
    );
  }
}
