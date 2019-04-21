export const GetAlbumDetails = (albumId, token) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(response => response.json())
}