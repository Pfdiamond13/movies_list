import React from 'react';

// Inputs should be controlled components https://reactjs.org/docs/forms.html

const Search = ({ handleMovieSearch }) => (
  <div>
    <label>
      <input type='text'
        onChange={(e) => handleMovieSearch(e.target.value)}
      />
    </label>
    {/* <button onClick={(e) => handleMovieSearch(e)}>Go</button> */}
  </div>
);

export default Search;
