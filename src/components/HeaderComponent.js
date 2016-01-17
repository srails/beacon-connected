'use strict';

import React from 'react';

import 'styles//Header.less';

import BrandName from './BrandNameComponent';

import logo from '../images/servant.png';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="container">
          {/*<img className="logo" src={ logo } alt="Butler" /> <BrandName marginHorizontal />*/}
          <img className="logo" src="https://raw.githubusercontent.com/srails/beacon-connected/master/src/images/servant.png" alt="Butler" /> <BrandName marginHorizontal />
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
