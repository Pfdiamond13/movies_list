import ReactDOM from 'react-dom';
import React from 'react';
import {MovieList} from './movieList';

export default class App extends React.Component {
  constructor(props) { //TODO
    console.log(props);
    super(props);
  }
  
  render() {

    return ( 
      <div>
        <div><MovieList movies={this.props.movies}/></div>
        <div></div>
    
      </div>
    );
  }
}