import React, { Component } from 'react';
import { SearchBar } from './components/SearchBar'
import { AlbumList } from './components/AlbumList'
import { GetAlbums } from './components/GetAlbums'
import { Container } from 'semantic-ui-react'
import './variables.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchTerm){
    GetAlbums(searchTerm)
      .then(response => this.setState({albums: response.albums.items}))
      .catch(err => {
        console.log("Something went wrong, see below for the error details:")
        console.log(err)
      })
    
  }
  render() {
    return (
      <Container>
        <SearchBar handleSearch={this.handleSearch}/>
        <AlbumList albums={this.state.albums}/>
      </Container>
    );
  }
}

export default App;
