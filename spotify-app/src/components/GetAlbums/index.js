import React from 'react'

export const GetAlbums = (searchTerm) => {
    var numOfResults = 10;
    return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=${numOfResults}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQCQanwqmGPLUyFDv9rDZmeHkcou_mNWRTS5-jYMhQUpzmHN4Vwp78vBY3s-ATHjqj220xrGUlbqZfBUfDgpLU197zg-2CufEySypdO7qZh4Z6TjjEXrOxpY_2ZmQdyddikdSuqA_icjOF1jEQ'
        }
    })
        .then(response => response.json())
}