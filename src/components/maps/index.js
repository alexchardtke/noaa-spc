import React, { Component } from 'react';
import MapNav from './map-nav';
import Map from './map';
import MapTable from './map-table';

export default class Maps extends Component {
  render() {
    return (
      <div>
        <MapNav active={this.props.maps.hoveringMap} isHoveringMapNav={this.props.hoverMapNav}/>
        <Map id={this.props.maps.hoveringMap}/>
        <MapTable />
      </div>
    );
  }
}
