import React, { Component } from 'react';
import { MAP_IMAGES } from '../../constants';

export default class Map extends Component {
  render() {
    const { id } = this.props;
    const { src, alt } = MAP_IMAGES[id];

    return (
      <div className="map-wrapper">
        <img src={src} width="582" height="408" alt={alt}/>
      </div>
    );
  }
}
