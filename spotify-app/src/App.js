import React, { Component } from 'react'
import { SearchBar } from './components/SearchBar'
import { AlbumList } from './components/AlbumList'
import { GetAlbums } from './components/GetAlbums'
import { Container } from 'semantic-ui-react'
import { SortOptions } from './components/SortOptions'
import { Authorize } from './components/Authorization'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums: undefined,
      sorted: "ascending",
      searchTerm: "",
      limit: 10,
      offset: 0,
      searchDisabled: false,
      token: window.location.hash.split("&")[0].split("=")[1]
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleSearch(searchTerm){
    this.setState({
      searchTerm: searchTerm,
      searchDisabled: true,
      albums: []
    }, () => this.getAlbums())
  }
  
  getAlbums(){
    GetAlbums(this.state.token, this.state.searchTerm, this.state.limit, this.state.offset)
    .then(results => {
      if(results.albums.total === 0){
        this.setState({
          albums: null,
          searchDisabled: false
        })
      }else if(results.albums.items){
        if(this.state.albums){
        this.setState({
          albums: this.state.albums.concat(results.albums.items),
          searchDisabled: false
        })}else{
          this.setState({
            albums: results.albums.items,
            searchDisabled: false
          })
        }
      }
    }).catch(err => {
      if(err.message === "401"){
        Authorize()
      }
      console.log("Something went wrong, see the error code below:")
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

    handleScroll = (e) => {
      if((window.scrollY + window.innerHeight + 1) > document.body.scrollHeight){
        this.setState({
          offset: this.state.offset+this.state.limit
        }, () => this.getAlbums())
      }
    }
  
    componentDidMount = () => {
      window.addEventListener("scroll", this.handleScroll)
    }

  render() {
    return (
      <Container>
        <SearchBar handleSearch={this.handleSearch} searchDisabled={this.state.searchDisabled}/>
        {this.state.albums ? <SortOptions handleSort={this.handleSort}/> : null}
        <AlbumList albums={this.state.albums} token={this.state.token}/>
      </Container>
    );
  }
}

export default App;