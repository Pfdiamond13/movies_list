import React from 'react';
import { MovieListEntry } from './movieListEntry';
import Search from './search';
import { AddMovie } from './addMovie';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      filteredMovies: [],
      value: '',
      addValue: ''
    };
  }

  handleChange(event) {
    this.setState({ addValue: event.target.value });
  }

  handleMovieSearch(value) {
    this.setState({ value: value.toString() }, () => {
      let fileredMovie = this.state.movieList.filter((element) => { return element.title.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1; });
      this.setState({ filteredMovies: fileredMovie });
    });
  }

  handleAddMovie() {
    this.state.movieList.push({ title: this.state.addValue });
    this.setState({ movieList: this.state.movieList });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddMovie();
    }
  }

  render() {
    let RICH;
    if (this.state.filteredMovies.length > 0) {
      RICH = this.state.filteredMovies;
    } else {
      RICH = this.state.movieList;
    }
    return (
      <div>
        <div>
          <div className='movieList'>MovieList</div>
          <div><AddMovie handleAddMovie={this.handleAddMovie.bind(this)} handleAddChange={this.handleChange.bind(this)} handleKeyPress={this.handleKeyPress.bind(this)} /></div>
          <div><Search handleMovieSearch={this.handleMovieSearch.bind(this)} /></div>
          <div>{RICH.map((movie) => {
            return (
              <MovieListEntry movie={movie} />
            );
          }
          )}</div>
        </div>
      </div>
    );
  }


}



/* <MovieList movies={this.state.movieList} handleMovieSearch={this.handleMovieSearch.bind(this)} handleAddMovie={this.handleAddMovie.bind(this)} handleAddChange={this.handleChange.bind(this)}/></div> */

