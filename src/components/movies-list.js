import React, { Component } from 'react';
import MovieItem from './movie-item.js';
import request from 'superagent';
import Swiper from 'swiper';

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
    const movieItems = this.state.movies.map((movie, i) => {
      return (<MovieItem title={movie.title} description={movie.description} image={movie.images[0].url} key={i}/>)
    });
    let swiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
      direction: 'horizontal',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      mousewheelControl: true,
      keyboardControl: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });

    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><h1>hippo1</h1><img src="http://animal-dream.com/data_images/hippo/hippo6.jpg"/></div>
          <div className="swiper-slide"><h1>hippo2</h1><img src="http://animal-dream.com/data_images/hippo/hippo6.jpg"/></div>
          <div className="swiper-slide"><h1>hippo3</h1><img src="http://animal-dream.com/data_images/hippo/hippo6.jpg"/></div>
        </div>
        <div className="swiper-pagination">Pagination</div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    );
  }
}
