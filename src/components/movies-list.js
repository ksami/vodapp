import React, { Component } from 'react';
import MovieItem from './movie-item.js';
import request from 'superagent';
import Swiper from 'swiper';
import Video from 'react-html5video';
import { Modal } from 'react-bootstrap';

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
      <div>
      { this._playVideo() }
      </div>
      </div>
    );
  }

  _playVideo() {
    if(this.state.videoUrl){
      return (
        <Modal show={this.state.showVideo} onHide={this._closeVideo.bind(this)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Video controls autoPlay loop muted ref="video" onProgress={this.onProgress}>
            <source src={this.state.videoUrl} type="video/mp4" />
            </Video>
          </Modal.Body>
        </Modal>
      );
    }
  }

  _closeVideo(){
    this.setState({showVideo: false});
  }

  _onClick(videoUrl){
    this.setState({videoUrl: videoUrl});
    this.setState({showVideo: true});
  }
}
