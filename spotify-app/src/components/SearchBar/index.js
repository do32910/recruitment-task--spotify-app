import React from 'react'
import './SearchBar.scss'

export const SearchBar = (props) => {

// function handleSearch(searchTerm){
//     console.log(searchTerm)
// }

 return (
        <div className="ui big icon input search-bar">
            <input type="text" placeholder="Search..." onChange={(e) => props.handleSearch(e.target.value)}/>
            <i aria-hidden="true" className="search icon"></i>
        </div>
 )   
}