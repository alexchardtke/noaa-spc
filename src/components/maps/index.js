import React, { Component } from 'react';
import MapNav from './map-nav';
import Map from './map';

export default class Maps extends Component {
  render() {
    return (
      <div>
        <MapNav active={this.props.maps.hoveringMap} hoverMapNav={this.props.hoverMap} isHoveringMapNav={this.props.isHoveringMapNav}/>
        <Map id={this.props.maps.hoveringMap}/>
      </div>
    );
  }
}
