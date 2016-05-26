import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';

export default class MovieItem extends Component {
  render (){
    return (
      <Col xs={12} md={4}>
        <Thumbnail src={this.props.image}>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </Thumbnail>
      </Col>
    )
  }
}
