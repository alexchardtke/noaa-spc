import React, { Component } from 'react';
import Header from '../containers/header';
import Maps from '../containers/maps';
import Products from '../containers/products';
import Headline from '../containers/headline';
import Feature from '../containers/feature';

export default class App extends Component {
  componentDidMount () {}

  render() {
    return (
      <div className="app mx-auto">
        <Header />
        <Headline />
        <div className="app-main-content">
          <Maps />
          <Products />
        </div>
        <div className="app-feature-content">
          <Feature />
        </div>
      </div>
    );
  }
}
