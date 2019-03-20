import React from 'react';

const AddMovie = (props) => (
  <div>
    <label>
      <input type='text' onChange={(e) => props.handleAddChange(e)}
      ></input>
    </label>
    <button onKeyPress={(e) => props.handleKeypress(e)} onClick={(e) => props.handleAddMovie(e)}>Add Movie to Watch</button>
  </div>
);

export { AddMovie };