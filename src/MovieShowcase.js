import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //   movieData.forEach(movie => {
  //       return (
  //         MovieCard.title = movie.title,
  //         MovieCard.IMDBRating = movie.IMDBRating,
  //         MovieCard.genres = movie.genres,
  //         MovieCard.poster = movie.poster
  //       )
  //   })
  // }

  generateMovieCards = () => {
    return movieData.map((movie, index) => <MovieCard
          key={index}
          title={movie.title}
          IMDBRating ={movie.IMDBRatimg}
          genres = {movie.genres}
          poster = {movie.poster}
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

MovieCard.defaultProps = {
  title: 'Unknown',
  IMDBRating: null,
  genres: 'No Genre(s) Found',
  posterSrc: 'default'
} 
