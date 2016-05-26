import React, { Component } from 'react';
import MovieItem from './movie-item.js';

export default class MoviesList extends Component {

  render () {
    const movies = this._getMovies();
    return (
      <div className="movie-list">
        <div className="movie-item">{movies}</div>
      </div>
    )
  }

  _getMovies (){
    const movies = [
      {
        title: "10 Things I Hate About You",
        description: "A new kid must find a guy to date the meanest girl in school, the older sister of the girl he has a crush on, who cannot date until her older sister does.",
        type: "movie",
        publishedDate: 931478400000,
        availableDate: 931478400000,
        metadata: [
          {
            value: "en",
            name: "language"
          }
        ],
        contents: [
          {
            url: "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
            format: "mp4",
            width: 640,
            height: 360,
            language: "en",
            duration: 3600000,
            geoLock: false,
            id: "vid_103"
          }
        ],
        credits: [
          {
            role: "Director",
            name: "Gil Junger"
          },
          {
            role: "Heath Ledger",
            name: "Heath Ledger"
          },
          {
            role: "Julia Stiles",
            name: "Julia Stiles"
          },
          {
            role: "Joseph Gordon-Levitt",
            name: "Joseph Gordon-Levitt"
          }
        ],
        parentalRatings: [
          {
            scheme: "MPAA",
            rating: "PG_13"
          }
        ],
        images: [
          {
            type: "cover",
            url: "http://lorempixel.com/214/317/?t=1",
            width: 214,
            height: 317,
            id: "f67e6e8a7478d1dae24e869f3d7081cf"
          }
        ],
        categories: [
          {
            title: "Comedy",
            description: "Comedy movies",
            id: "movies-comedy"
          },
          {
            title: "Drama",
            description: "Drama movies",
            id: "movies-drama"
          },
          {
            title: "Romance",
            description: "Romantic movies",
            id: "movies-romance"
          }
        ],
        id: "10-things-i-hate-about-you"
      },
      {
        title: "12 Years a Slave",
        description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        type: "movie",
        publishedDate: 1389312000000,
        availableDate: 1389312000000,
        metadata: [
          {
            value: "en",
            name: "language"
          }
        ],
        contents: [
          {
            url: "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
            format: "mp4",
            width: 640,
            height: 360,
            language: "en",
            duration: 7200000,
            geoLock: false,
            id: "vid_101"
          }
        ],
        credits: [
          {
            role: "Director",
            name: "Steve McQueen"
          },
          {
            role: "Chiwetel Ejiofor",
            name: "Chiwetel Ejiofor"
          },
          {
            role: "Michael Kenneth Williams",
            name: "Michael Kenneth Williams"
          },
          {
            role: "Michael Fassbender",
            name: "Michael Fassbender"
          }
        ],
        parentalRatings: [
          {
            scheme: "MPAA",
            rating: "R"
          }
        ],
        images: [
          {
            type: "cover",
            url: "http://lorempixel.com/214/317/",
            width: 214,
            height: 317,
            id: "0fed2015ee5eed694899959976bd49d3"
          }
        ],
        categories: [
          {
            title: "Biography",
            description: "Biography movies",
            id: "movies-biography"
          },
          {
            title: "Drama",
            description: "Drama movies",
            id: "movies-drama"
          },
          {
            title: "History",
            description: "History movies",
            id: "movies-history"
          }
        ],
        id: "12-years-a-slave"
      }
    ];

    return movies.map((movie) => {
      return (<MovieItem title={movie.title} description={movie.description} image={movie.images[0].url} key={movie.id}/>)
    });
  }
}
