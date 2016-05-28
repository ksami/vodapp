import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class MovieItem extends Component {

  render () {
    return (
      <div className="swiper-slide">
        <Panel onClick={this._handleClick.bind(this)}>
          <img src={this.props.images[0].url}/>
          <h3>{this.props.title}</h3>
        </Panel>
      </div>
    );
  }

  _handleClick(event){
    this.props.clicked(this.props.contents[0].url);
  }
}
