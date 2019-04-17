import React from 'react'

export const Album = (props) => {
    const album = props.album
    return (
        <div>{album.name}</div>
    )
}