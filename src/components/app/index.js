import React, { Component } from 'react';
import Header from '../../containers/header';
import Maps from '../../containers/maps';
import Headline from '../../containers/headline';

export default class App extends Component {
  componentDidMount () {}

  render() {
    return (
      <div className="app">
        <Header />
        <Headline />
        <div className="app-main-content">
          <Maps/>
        </div>
      </div>
    );
  }
}
