import React, { Component } from 'react';
import { FEATURE_CARDS } from '../../constants';
import Card from './card';

export default class Feature extends Component {

  renderCards() {
    return FEATURE_CARDS.map(item => {
      return <Card key={item.alt} item={item}/>;
    });
  }
  render() {
    return (
      <div className="feature-wrapper">
        {this.renderCards()}
      </div>
    );
  }
}
