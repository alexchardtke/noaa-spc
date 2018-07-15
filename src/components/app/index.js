import React, { Component } from 'react';
import Header from '../../containers/header';
import Maps from '../../containers/maps';

export default class App extends Component {
  componentDidMount () {}

  render() {
    return (
      <div>
        <Header />
        <div className="app-main-content">
          <Maps/>
        </div>
      </div>
    );
  }
}
