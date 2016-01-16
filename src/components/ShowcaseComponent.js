'use strict';

import React from 'react';

import 'styles//Showcase.less';

class ShowcaseComponent extends React.Component {
  render() {
    return (
      <div className="showcase-component">
        <div className="headline">{ this.props.headline }</div>
        <div className="description">
          { this.props.children }
        </div>
        <div className="image"><img src={ this.props.image } /></div>
      </div>
    );
  }
}

ShowcaseComponent.displayName = 'ShowcaseComponent';

// Uncomment properties you need
ShowcaseComponent.propTypes = {
  headline: React.PropTypes.string,
  children: React.PropTypes.string,
  image: React.PropTypes.any
};
// ShowcaseComponent.defaultProps = {};

export default ShowcaseComponent;
