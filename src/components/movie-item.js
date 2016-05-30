import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class MovieItem extends Component {

  render () {
    return (
      <div className="swiper-slide">
        <Panel onClick={this._handleClick.bind(this)}>
          <img src={this.props.images[0].url}/>
          <p>{this.props.title}</p>
        </Panel>
      </div>
    );
  }

  _handleClick(event){
    this.props.clicked(this.props.id);
  }
}
