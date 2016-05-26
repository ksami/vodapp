import React, { Component } from 'react';
import { Grid, Row, Thumbnail, Image } from 'react-bootstrap';

export default class MovieItem extends Component {
  render (){
    return (
    <Grid>
      <Row>
        <Thumbnail src={this.props.image}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        </Thumbnail>
      </Row>
    </Grid>
    )
  }
}
