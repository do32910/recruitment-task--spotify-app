import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar'
import { AlbumList } from './components/AlbumList'
import { GetAlbums } from './components/GetAlbums'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchTerm){
    console.log("hi im search from app")
    GetAlbums(searchTerm)
      .then(response => this.setState({albums: response.albums.items}))
    
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch}/>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
