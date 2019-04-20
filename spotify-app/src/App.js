import React, { Component } from 'react'
import { SearchBar } from './components/SearchBar'
import { AlbumList } from './components/AlbumList'
import { GetAlbums } from './components/GetAlbums'
import { Container } from 'semantic-ui-react'
import { SortOptions } from './components/SortOptions'
import './variables.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums: undefined,
      sorted: "ascending"
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleSearch(searchTerm){
    GetAlbums(searchTerm)
      .then(response => this.setState({albums: response.albums.items}))
      .catch(err => {
        console.log("Something went wrong, see below for the error details:")
        console.log(err)
      })
  }
  
  handleSort(sortBy){
    var sortedAlbums;
    var sortOrder;
      if(this.state.sorted === "ascending"){
        sortedAlbums = this.state.albums.sort(function(prev, next){
        var keyA = prev[sortBy],
            keyB = next[sortBy];
        if(keyA > keyB) return -1;
        if(keyA < keyB) return 1;
        return 0;
      });
      sortOrder = "descending"
      }
      if(this.state.sorted === "descending"){
        sortedAlbums = this.state.albums.sort(function(prev, next){
        var keyA = prev[sortBy],
            keyB = next[sortBy];
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
      });
      sortOrder = "ascending"
      }
      this.setState({
        albums: sortedAlbums,
        sorted: sortOrder
      })
    }

  render() {
    return (
      <Container>
        <SearchBar handleSearch={this.handleSearch}/>
        {this.state.albums ? <SortOptions handleSort={this.handleSort}/> : null}
        <AlbumList albums={this.state.albums}/>
      </Container>
    );
  }
}

export default App;