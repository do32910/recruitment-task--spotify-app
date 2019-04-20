    
import React, { Component } from 'react'
import Album from '../Album'
import './AlbumList.scss'

export const AlbumList = (props) => {

    // if(props.albums.length < 1){
    //     return (
    //         <div>No results found</div>
    //     )
    // }else{
        return (
        <ul>
            {props.albums.map(album => <Album album={album} key={album.id}/>)}
        </ul>
        )
    // }
}