import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import Detail from "./Details";
import "./Home.css";

function Home() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const searchInput = (e) => {
    setState((prevState) => ({
      ...prevState,
      s: e.target.value,
    }));
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(`https://www.omdbapi.com/?apikey=22953e06&s=${state.s}`)
      .then(({ data }) => {
        if (data.Response === "True") {
          setState((prevState) => ({
            ...prevState,
            results: data.Search,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            results: [],
          }));
          alert("Movie/Web-Series/Serial not found!");
        }
      })
      .catch((err) => console.error("Search error: ", err));
    }
  };

  const openDetail = (id) => {
    axios(`https://www.omdbapi.com/?apikey=22953e06&i=${id}`)
    .then(({ data }) => {
      if (data.Response === "True") {
        setState((prevState) => ({
          ...prevState,
          selected: data,
        }));
      }
    })
    .catch((err) => console.error("Detail error: ", err));
  };

  const closeDetail = () => {
    setState((prevState) => ({
      ...prevState,
      selected: {},
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Mania</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />
        <div className="container">
          {state.results.map((movie) => (
            <div
              key={movie.imdbID}
              className="item"
              onClick={() => openDetail(movie.imdbID)}
            >
              <img style={{ width: "200px" }} src={movie.Poster} alt={movie.Title} />
              <h3 style={{ color: "white" }}>{movie.Title}</h3>
            </div>
          ))}
        </div>

        {state.selected.Title && (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        )}
      </main>
    </div>
  );
}

export default Home;