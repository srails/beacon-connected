'use strict';

import React from 'react';

import 'styles//Footer.less';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        <hr/>
        <div className="container">
          <span className="fine-print">&copy; butler</span>
        </div>
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
