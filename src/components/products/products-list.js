import React, { Component } from 'react';
import { PRODUCTS_ALL_PRODUCTS_LIST_ITEMS } from '../../constants';

export default class ProductsList extends Component {

  renderItemRisk(item) {
    if (item.risk) {
      return (
        <li className="products-list-risk">- Categorical Risk: {item.risk}</li>
      )
    }
    return null;
  }

  renderItemIssued(item) {
    if (item.issued) {
      return (
        <li className="products-list-issued">- Issued: {item.issued}</li>
      )
    }
    return null;
  }

  renderProductsListItems() {
    return PRODUCTS_ALL_PRODUCTS_LIST_ITEMS.map(item => {
      return (
        <li key={item.alt} className="products-list-list-item nav-item">
          <div className="products-list-item-card">
            <img className="products-list-image" src={item.src} alt={item.alt}/>
            <div className="products-list-info">
              <a href={`#${item.title}`}>{item.title}</a>
              <ul className="products-list-info-list">
                {this.renderItemRisk(item)}
                {this.renderItemIssued(item)}
              </ul>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="products-list-wrapper">
        {this.renderProductsListItems()}
      </ul>
    );
  };
}
