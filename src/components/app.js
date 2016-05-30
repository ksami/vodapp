import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="nav-bar">
          <Header />
        </header>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}
