import React, { Component } from 'react'

import Header from './header'
import Footer from './footer'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="base">
        <Header />
          {this.props.children}
        <Footer />

      </div>
    );
  }
}
