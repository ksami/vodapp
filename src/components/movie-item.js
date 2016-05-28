import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class MovieItem extends Component {
  render () {
    return (
      <div className="swiper-slide">
      <Thumbnail src={this.props.image}>
        <h3>{this.props.title}</h3>
      </Thumbnail>
      </div>
    );
  }
}
