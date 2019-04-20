import React from 'react'

export const GetAlbumDetails = (albumId) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQByKNQlVM7ww5np_xOoWqGSFPkY-YZ6C1hBtQ8Oa8dvNsb8mQ7Uy7uAC-L5chZfRJEDgt6rIIbv1pWbMBWiAw0sQIZQdYZffMlnoi9iz5y5vKdcAS6XITFiRY_FamGdFB3m1Mhtli3TYqpvfg'
        }
    }).then(response => response.json())
}