import React, { Component } from 'react';

export default class MainNavItem extends Component {
  constructor (props) {
    super(props);

    this.renderCount = 1;

    this.state = {
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(index) {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  renderSubmenu() {
    const { item } = this.props;
    const { submenu } = item;

    return submenu.map(item => {
      console.log(item)
      return (
        <li key={item.title}>
          <a href={item.href}>{item.title}</a>
        </li>
      );
    });
  }

  render() {
    const { item, index} = this.props;
    const { menuTitle, hasDivider, submenu } = item;
    const { isHovered } = this.state;
    const activeClass = isHovered ? 'activeNav' : '';
    const menuShowHideClass = isHovered ? 'menu-show' : 'menu-hide';

    return (
      <li key={index} className="nav-item py-0" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="nav-link-container">
          <a className={`nav-link py-0 ${activeClass}`} href={`#${menuTitle}`}>{menuTitle}</a>
          {hasDivider && <span className="main-nav-divider py-0">|</span>}
        </div>
        <div className={`submenu-wrapper ${menuShowHideClass}`}>
          <div className="submenu-title">{menuTitle}</div>
          <ul>
            {this.renderSubmenu()}
          </ul>
        </div>
      </li>
    );
  }
};
