import React, { Component } from 'react';
import cookie from 'react-cookie';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import request from 'superagent';

export default class History extends Component {
  constructor(){
    super();

    this.state = {
      watchedMovies: []
    }
  }

  componentWillMount(){
    request
    .get('/getHistory')
    .end((err, res) => {
      if(res != null){
        this.setState({ watchedMovies: res.body });
      }
    });
  }
  render () {
    const listOfWatchedMovies = this.state.watchedMovies.map((movie,i) => {
      return (
        <ListGroupItem key={i}>{movie}</ListGroupItem>
      );
    });

    return (
    <div className="history-view">
      <ListGroup>
        { listOfWatchedMovies }
      </ListGroup>
    </div>
  );
  }

}
