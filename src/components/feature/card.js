import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-wrapper">
        <h3 className="font-weight-bold">{item.title}</h3>
        <img src={item.src} alt={item.alt}/>
        <h4 className="font-weight-bold">{item.subText}</h4>
        <p>{item.moreData}</p>
      </div>
    );
  }
}
