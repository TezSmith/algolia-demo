import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const ALG_APP = process.env.REACT_APP_ALG_APP
const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY

const searchClient = algoliasearch(ALG_APP, SEARCH_KEY);

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <h1>Tez's Library</h1>
        <div className=".container">
          <InstantSearch searchClient={searchClient} indexName="demo_books">
            <SearchBox
              translations={{ placeholder: "Search for books" }}
            />
             <Hits hitComponent={Hit}/>
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
        <Card.Header>{hit.title}</Card.Header>
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
