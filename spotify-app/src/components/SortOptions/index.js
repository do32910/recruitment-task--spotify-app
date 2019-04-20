import React from 'react'
import './SortOptions.scss'

export const SortOptions = (props) => {

    return (
        <div className="sort__container">
        Sort by: <button className="sort-btn" onClick={() => props.handleSort("release_date")}>Release date</button>  <button className="sort-btn" onClick={() => props.handleSort("name")}>Album name</button>
        </div>
    )
}