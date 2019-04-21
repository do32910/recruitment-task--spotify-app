import React, { Component } from 'react'
import './SearchBar.scss'

export class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ""
        }
    }

    setSearchTerm(e){
        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){
        return (
        <div className="ui big action input search-bar">
            <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={(e) => this.setSearchTerm(e)}/>
            <button className="ui icon button" onClick={() => this.props.handleSearch(this.state.searchTerm)} disabled={!this.state.searchTerm || this.props.searchDisabled}><i aria-hidden="true" className="search icon"></i></button>
        </div>
        )}   
}