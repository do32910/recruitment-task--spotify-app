    
import React from 'react'
import Album from '../Album'

export const AlbumList = (props) => {
    if(props.albums === undefined){
        return null
    }
    if(props.albums === null){
        return (
            <div>No results found</div>
        )
    }else{
        return (
        <ul>
            {props.albums.map(album => <Album album={album} key={album.id} token={props.token}/>)}
        </ul>
        )
    }
}