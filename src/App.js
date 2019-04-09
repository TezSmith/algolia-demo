import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, ClearRefinements } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const ALG_APP = process.env.REACT_APP_ALG_APP
const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY

const searchClient = algoliasearch(ALG_APP, SEARCH_KEY);

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="navbar">
          <h1>Bookish - Algolia Demo</h1>
        </div>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="demo_books">
              <div className="sidebar">
               <ClearRefinements clearsQuery="true"/>
               <h2>Genres</h2>
               <RefinementList attribute="genre" />
              </div>
              <div className="main">
               <SearchBox
                translations={{ placeholder: "Search for books" }}
               />
               <Hits hitComponent={Hit}/>
              </div>
        
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {
    
    const { hit } = props
  
    return (
    <Card>
      <Image src={hit.image} />
      <Card.Content>
        <Card.Header>${hit.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
          {hit.author}
      </Card.Content>
    </Card>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default App;
