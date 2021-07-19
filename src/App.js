import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Movie from "./Movie";
import "./App.css";



class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies, isLoading: false});

  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;

    return (
      <section className="constiner">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(items => {
            console.log(items);
            return (
              <Movie
                key={items.id} 
                id={items.id} 
                title={items.title} 
                summary={items.summary} 
                poster={items.medium_cover_image}
                genres={items.genres} 
                year={items.year}
              />
          )
        })}
          </div>
        )}
      </section>
      
    )
  }
}

export default App;

//setTimeout(() => {
//  this.setState({isLoading: false});
//},3000);