import React from 'react';
import {MovieListEntry} from './movieListEntry';

var MovieList = (props) => (
  <div>MovieList
    <div>
      <div>{props.movies.map((movie) => <MovieListEntry movie={movie} />)}</div>
    </div>
  </div>
);


export {MovieList}; 



  
