import React, { Component } from 'react';

export default class MainLayout extends Component {
  render() {
    return(
      <div className="main-layout">
        { this.props.children }
      </div>
    );
  }
}
