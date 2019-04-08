import React, { Component } from 'react';
import './App.css';
import {books} from './books'
import BookContainer from './components/BookContainer'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const ALG_APP = process.env.REACT_APP_ALG_APP
const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY

const searchClient = algoliasearch(ALG_APP, SEARCH_KEY);

class App extends Component {
  
  state = {
    books: books
  }
  
  render() {

    return (
      <div className="App">
       <h1>Tez's Library</h1>
        <InstantSearch searchClient={searchClient} indexName="demo_books">
          <SearchBox />
          <Hits />
        </InstantSearch>
       <BookContainer books={this.state.books}/>
      </div>
    );
  }
}

export default App;
