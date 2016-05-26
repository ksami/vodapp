import React, { Component } from 'react';
import Header from './header.js';
import MoviesList from './movies-list.js'


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MoviesList />
      </div>
    );
  }
}
