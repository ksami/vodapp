import React, { Component } from 'react';
import { Thumbnail, Panel } from 'react-bootstrap';

export default class MovieItem extends Component {
  render () {
    return (
      <div className="swiper-slide">
      <Thumbnail src={this.props.image} style={this.props.style}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </Thumbnail>
      </div>
    );
  }
}
