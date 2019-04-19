import React from 'react'
import Album from '../Album'

export const AlbumList = (props) => {
    // console.log(props.albums)
    return (
        <ul>
            {props.albums.map(album => <Album album={album} key={album.id}/>)}
        </ul>
    )
}