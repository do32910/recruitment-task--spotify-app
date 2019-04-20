export const GetAlbums = (searchTerm, limit=10) => {
    return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=${limit}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQAU0ho8stA1Od8s47TV67UDmY0LX64VDtQXvxFitvMHcJ5b893xmnl21KLU7swMphZrTsQu8dgSlm14ISgxyzeIT9VnhEpgbgHXxtNqN7ZB7A0jDDizB1GFXOoyGavgIIIXo5g3KH8DxdXW0w'
        }
    })
        .then(response => response.json())
}