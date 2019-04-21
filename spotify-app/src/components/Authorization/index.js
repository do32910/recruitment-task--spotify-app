import React from 'react'

export const Authorize = () => {
    var redirect_uri = "http://localhost:3000"
    var url = `https://accounts.spotify.com/authorize?client_id=33758ceffef44a71ab14b97bf7a7a68d&response_type=token&redirect_uri=${encodeURIComponent(redirect_uri)}`

    window.location = url
}