
import React from 'react';
import {MovieList} from './movieList';
import {Search} from './search';


export default class App extends React.Component {
  constructor(props) { //TODO
    console.log(props);
    super(props);
    this.state = {
      movieList: props.movies,
      value: null
    };
  }
  handleMovieSearch(event) {
    this.state.value = event.toString();
    for (let i = 0; i < this.state.movieList.length; i++) {
      if (this.state.value.toLowerCase() === this.state.movieList[i].title.toLowerCase()) {
        this.setState({movieList: [this.state.movieList[i]]});
        return;
      } else {
        this.setState({movieList: this.props.movies});
      }
    }
  }
  
  render() {

    return ( 
      <div>
        <div><MovieList movies={this.state.movieList} handleMovieSearch={this.handleMovieSearch.bind(this)}/></div>
        <div></div>
    
      </div>
    );
  }
}