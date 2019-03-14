import React from 'react';
import {MovieListEntry} from './movieListEntry';
import {Search} from './search';

var MovieList = (props) => (
  <div>
    <div>
      <div className='movieList'>MovieList</div>
      <div><Search handleMovieSearch={props.handleMovieSearch}/></div>
      <div>{props.movies.map((movie) => <MovieListEntry movie={movie} />)}</div>
    </div>
  </div>
);


export {MovieList}; 



  
