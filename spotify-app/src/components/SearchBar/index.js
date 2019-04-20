import React from 'react'
import './SearchBar.scss'

export const SearchBar = (props) => {
    let searchTerm = React.createRef()
// function handleSearch(searchTerm){
//     console.log(searchTerm)
// }

 return (
        // <div className="ui big icon input search-bar">
        //     <input type="text" placeholder="Search..." onChange={(e) => props.handleSearch(e.target.value)}/>
        //     <button><i aria-hidden="true" className="search icon"></i></button>
        // </div>
        <div className="ui big action input search-bar">
            <input type="text" placeholder="Search..." ref={searchTerm}/>
            <button className="ui icon button" onClick={(e) => {props.handleSearch(searchTerm.current.value)}}><i aria-hidden="true" className="search icon"></i></button>
        </div>
 )   
}