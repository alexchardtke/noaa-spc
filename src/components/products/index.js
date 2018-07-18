import React, { Component } from 'react';
import ProductsNav from './products-nav';
import ProductsList from './products-list';

export default class Products extends Component {
  render() {
    return (
      <div className="products-wrapper">
        <ProductsNav activeTab={this.props.products.activeProductTab} clickedProductTab={this.props.clickedProductTab}/>
        <ProductsList activeList={this.props.products.activeProductTab}/>
      </div>
    );
  }
}
