import React from 'react'

export const GetAlbumDetails = (albumId) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQDlmNbe0pFDwtJfKDpgkWc7qCLGxwRzTRmu1Zf1_EFud5eJP0vCoAf0nMQ8aDYf7ZbDksaaNQUmLI4fXYG4k0SJ5Woft8-ufJg3lp09ovvDRTo1y78Ib0YObKOAtlqn80PywZt706vQCRgAnA'
        }
    }).then(response => response.json())
}