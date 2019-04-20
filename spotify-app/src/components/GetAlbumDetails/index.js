import React from 'react'

export const GetAlbumDetails = (albumId) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQC6cFZCLi6Cvuv0rmx5cIe4hx7BhnGDWmwVGZ9spcmEV49-PHQCwv9U6q0dvAQZxLi47WS4SYk1yiL9hYJ__WjiXxqXGA57AxpGkYIYDUoqP0UmT3UWgQvfD1h2q6r6bzwghdHTBglRBlg6jw'
        }
    }).then(response => response.json())
}