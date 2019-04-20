import React, { Component } from 'react'
import './SearchBar.scss'

// export const SearchBar = (props) => {
//     let searchTerm = React.createRef()
//     console.log(searchTerm.current)
//  return (
//         <div className="ui big action input search-bar">
//             <input type="text" placeholder="Search..." ref={searchTerm}/>
//             <button className="ui icon button" onClick={() => {props.handleSearch(searchTerm.current.value)}}><i aria-hidden="true" className="search icon"></i></button>
//         </div>
//  )   
// }

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
        console.log(this.state.searchTerm)
        return (
        <div className="ui big action input search-bar">
            {/* <input type="text" placeholder="Search..." onChange={(e) => this.setSearchTerm(e)}/> */}
            <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={(e) => this.setSearchTerm(e)}/>
            <button className="ui icon button" onClick={() => this.props.handleSearch(this.state.searchTerm)} disabled={!this.state.searchTerm}><i aria-hidden="true" className="search icon"></i></button>
        </div>
        )}   
}