import React, { Component } from "react";
import "../styles/moviedetails.css";
class MovieDetail extends Component {
  render() {
    let id = this.props.match.params.movieID;
    let movie = this.props.allmovies.filter((m) => m.id == id)[0];
    return (
      <div className="parent">
        {
          <h1>
            {movie.title} ({movie.year})
          </h1>
        }
        <img src={movie.img} className="img" />

        <h3 className="desc">{movie.descrShort}</h3>
      </div>
    );
  }
}

export default MovieDetail;
