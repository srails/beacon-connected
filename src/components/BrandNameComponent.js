'use strict';

import React from 'react';

require('styles//BrandName.less');

class BrandNameComponent extends React.Component {
  render() {
    let margin = this.props.marginHorizontal ? { margin: '0 10px' } : null;

    return (
      <span className="brandname-component" style={margin}>
        butler
      </span>
    );
  }
}

BrandNameComponent.displayName = 'BrandNameComponent';

// Uncomment properties you need
BrandNameComponent.propTypes = {
  marginHorizontal: React.PropTypes.bool
};
// BrandNameComponent.defaultProps = {};

export default BrandNameComponent;
