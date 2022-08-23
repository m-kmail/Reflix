import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/movie.css";
class Movie extends Component {
  rent = () => {
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
          <button className="del" onClick={this.tst}>
            <i class="fa fa-minus" aria-hidden="true"></i>
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
