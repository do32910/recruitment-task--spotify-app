export const GetAlbums = (token, searchTerm, limit=10, offset=0) => {
    searchTerm = searchTerm.replace(/`/g, "")
    return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=${limit}&offset=${offset*limit}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => {
            if(response.status !== 200){
                throw Error(response.status)
            }
            return response
        })
        .then(response => response.json())

}