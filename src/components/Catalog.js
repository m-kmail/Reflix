import React, { Component } from "react";
import "../styles/catalog.css";
import Movie from "./Movie";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movieInput: "",
      moviesFiltered: [],
    };
  }
  movieSearch = (e) => {
    let moviesInfo = this.props.moviesInfo.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      movieInput: e.target.value,
      moviesFiltered: moviesInfo,
    });
  };

  check(rented) {
    if (rented == undefined) return false;
    return rented.length > 0;
  }
  render() {
    let movies = this.props.moviesInfo;
    return (
      <div>
        <div className="head">
          <input
            type="text"
            placeholder="Search"
            value={this.state.movieInput}
            onChange={this.movieSearch}
          ></input>

          <h3 className="budget">Budget: {this.props.budget}$</h3>
        </div>

        <div className="rented">
          <h2>Rented movies</h2>
          {this.props.rented.map((r) => (
            <Movie movie={r} />
          ))}
        </div>

        <div className="cont">
          {this.state.moviesFiltered.length
            ? this.state.moviesFiltered.map((movie) => {
                return <Movie movie={movie} rent={this.props.rent} />;
              })
            : this.props.moviesInfo.map((movie) => {
                return <Movie movie={movie} rent={this.props.rent} />;
              })}
        </div>
      </div>
    );
  }
}

export default Catalog;
