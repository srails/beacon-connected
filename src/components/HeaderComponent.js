'use strict';

import React from 'react';

import 'styles//Header.less';

import BrandName from './BrandNameComponent';

import logo from '../images/servant-logo.png';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="container">
          <img className="logo" src={ logo } alt="Connected" /> <BrandName marginHorizontal />
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
