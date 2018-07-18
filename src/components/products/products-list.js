import React, { Component } from 'react';
import {
  PRODUCTS_ALL_PRODUCTS_LIST_ITEMS,
  PRODUCTS_WATCHES_LIST_ITEMS,
  PRODUCTS_MDS_LIST_ITEMS,
  PRODUCTS_OUTLOOKS_LIST_ITEMS,
  PRODUCTS_FIRE_LIST_ITEMS
} from '../../constants';

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

  renderListItems(items) {
    return items.map(item => {
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

  renderAllProducts() {
    if (!PRODUCTS_ALL_PRODUCTS_LIST_ITEMS.length) {
      return (
        <div className="products-list-no-active font-weight-bold">
          No Valid Products
        </div>
      )
    }

    return this.renderListItems(PRODUCTS_ALL_PRODUCTS_LIST_ITEMS);
  }

  renderWatches() {
    if (!PRODUCTS_WATCHES_LIST_ITEMS.length) {
      return (
        <div className="products-list-no-active font-weight-bold">
          No Valid Watches
        </div>
      );
    }

    return this.renderListItems(PRODUCTS_WATCHES_LIST_ITEMS);
  }

  renderMDs() {
    if (!PRODUCTS_MDS_LIST_ITEMS.length) {
      return (
        <div className="products-list-no-active font-weight-bold">
          No Valid Mesoscale Discussions
        </div>
      );
    }

    return this.renderListItems(PRODUCTS_MDS_LIST_ITEMS);
  }

  renderOutlooks() {
    if (!PRODUCTS_OUTLOOKS_LIST_ITEMS.length) {
      return (
        <div className="products-list-no-active font-weight-bold">
          No Valid Outlooks
        </div>
      );
    }

    return this.renderListItems(PRODUCTS_OUTLOOKS_LIST_ITEMS);
  }

  renderFire() {
    if (!PRODUCTS_FIRE_LIST_ITEMS.length) {
      return (
        <div className="products-list-no-active font-weight-bold">
          No Valid Fire
        </div>
      );
    }

    return this.renderListItems(PRODUCTS_FIRE_LIST_ITEMS);
  }

  renderProductsListItems() {
    const { activeList } = this.props;

    switch (activeList) {
      case 0:
        return this.renderAllProducts();
      case 1:
        return this.renderWatches();
      case 2:
        return this.renderMDs();
      case 3:
        return this.renderOutlooks();
      case 4:
        return this.renderFire();
      default:
        return null;
    }
  }

  render() {
    return (
      <ul className="products-list-wrapper">
        {this.renderProductsListItems()}
      </ul>
    );
  };
}
