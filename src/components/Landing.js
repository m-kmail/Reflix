import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

class Landing extends Component {
  render() {
    const users = [
      { name: "Kmail", color: "#1abc9c" },
      { name: "Marcos", color: "#9b59b6" },
      { name: "James", color: "#f1c40f" },
      { name: "Ezzat", color: "#7f8c8d" },
    ];
    return (
      <div className="container">
        <h1 className="who">Who's Watching</h1>
        <div className="users">
          {users.map((user) => (
            <Link to="/catalog">
              <div
                className="user"
                style={{ backgroundColor: `${user.color}` }}
              >
                <h1 className="userName">{user.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
