import React, { Component } from 'react';
import MovieItem from './movie-item.js';
import MovieView from './movie-view.js';
import request from 'superagent';
import Swiper from 'swiper';

export default class MoviesList extends Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      videoUrl: '',
      showVideo: false
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
      return (<MovieItem
        { ...movie }
        key={i}
        clicked={this._onClick.bind(this)}/>)
      });

      if(movieItems.length > 0){
        setTimeout(function() {
          new Swiper ('.swiper-container', {
            direction: 'horizontal',
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            scrollbarDraggable: true,
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30,
            mousewheelControl: true,
            keyboardControl: true,
            grabCursor: true,
            breakpoints: {
              1024: {
                slidesPerView: 4,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            },
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
          });
        }, 0);
      }

    return (
      <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          { movieItems }
        </div>
        <div className="swiper-scrollbar"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      { this._playVideo() }
      </div>
    );
  }

  _playVideo() {
    if(this.state.videoUrl){
      return (
        <MovieView videoUrl={this.state.videoUrl}
          showVideo={this.state.showVideo}
          closeVideo={this._closeVideoView.bind(this)}/>
      );
    }
  }

  _closeVideoView(){
    this.setState({showVideo: false});
  }

  _onClick(videoUrl){
    this.setState({videoUrl: videoUrl});
    this.setState({showVideo: true});
  }
}
