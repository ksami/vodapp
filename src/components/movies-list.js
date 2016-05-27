import React, { Component } from 'react';
import MovieItem from './movie-item.js';
import { Grid, Row } from 'react-bootstrap';
import request from 'superagent';

export default class MoviesList extends Component {

  constructor(){
    super();

    this.state = {
      movies: []
    };
  }

  componentWillMount(){
    request
    .get('https://demo2697834.mockable.io/movies')
    .end((err, res) => {
      this.setState({ movies: res.body.entries });
    });
  }

  render() {
    let movieItems = this.state.movies.map((movie) => {
      return (<MovieItem title={movie.title} description={movie.description} image={movie.images[0].url} key={movie.id}/>)
    });
    return (
      <Grid>
        <Row>
          <div className="movie-item">{movieItems}</div>
        </Row>
      </Grid>
    )
  }
}
