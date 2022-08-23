import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/movie.css";
class Movie extends Component {
  rent = () => {
    console.log(this.props);
    this.props.rent(this.props.movie.id);
  };
  render() {
    let id = this.props.movie.id;
    let str = "/movies/" + id;
    return (
      <div className="movie">
        <Link to={str}>
          <img src={this.props.movie.img} className="movieIMG" />
        </Link>
        {this.props.movie.isRented ? (
          <button className="hide" onClick={this.tst}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        ) : (
          <button className="add" onClick={this.rent}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        )}
      </div>
    );
  }
}

export default Movie;
