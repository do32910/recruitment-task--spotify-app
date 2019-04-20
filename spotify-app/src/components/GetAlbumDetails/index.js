import React from 'react'

export const GetAlbumDetails = (albumId) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Authorization": 'Bearer BQAUIejlqD1A5ha_sOsLZTq1EeHdfv4ZK4r83wp8UEZ1Nt8s_6eK3ZDNUnpLbP1MMDP5ONKJm_4CyDXcbqqZ9LN9mGoO5B6288y2qqXR4G7dimUKtOgzrQgQAPV5snN7LOlGwl62XrVc1FoozQ'
        }
    }).then(response => response.json())
}