import _ from 'lodash';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import {movieList} from '../data/exampleData';


ReactDOM.render(
  <App movies={movieList} />,
  document.getElementById('app')
);