import React, { Component } from 'react';
import { PRODUCTS_NAV_ITEMS } from '../../constants';

export default class ProductsNav extends Component {

  renderProductsNavItems() {
    const { clickedProductTab } = this.props;

    return PRODUCTS_NAV_ITEMS.map((item, index) => {
      const green = (item.item === 'Watches' || item.item === 'MDs') ? 'green' : '';
      const blue = (item.item === 'Outlooks' || item.item === 'Fire') ? 'blue' : '';
      return (
        <li key={item.item} className="products-nav-list-item nav-item">
          <a
            className={`products-nav-list-item font-weight-bold nav-link active ${green} ${blue}`}
            href={`#${item.item}`}
            onClick={ e => clickedProductTab(index)}
          >
            {item.item}
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="products-nav-wrapper">
        <ul className="products-nav-list navbar-dark nav nav-tabs nav-fill w-100">
          {this.renderProductsNavItems()}
        </ul>
      </div>
    );
  }
}
