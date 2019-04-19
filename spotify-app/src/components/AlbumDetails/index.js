import React, { Component } from 'react'
import { GetAlbumDetails } from '../GetAlbumDetails'
import './AlbumDetails.scss'

export default class AlbumDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            album: undefined
        }
        this.getDetails();
    }

    getDetails = () => {
        GetAlbumDetails(this.props.albumId)
            .then(album => {
                this.setState({
                    album: album
                })
            })
    }

    // convertMilisecondsToMinutes(timeInMs){
    //         let fullMins = 0
    //         while(timeInMs > 60000){
    //             fullMins++
    //             timeInMs -= 60000
    //         }
    //         let seconds = 0
    //         while(timeInMs > 1000){
    //             seconds++
    //             timeInMs -= 1000
    //         }
    //         if(fullMins < 10){
    //             fullMins = "0" + fullMins
    //         }
    //         if(seconds < 10){
    //             seconds = "0" + seconds
    //         }
    //         return `${fullMins}:${seconds}`
    // }

    
    convertMilisecondsToMinutes(timeInMs){
        console.log("time in ms", timeInMs)
        let minutes = Math.floor(timeInMs / 60000)
        let seconds = Math.floor((timeInMs - minutes*60000) / 1000)
        if(minutes < 10){
            minutes = "0" + minutes
        }
        if(seconds < 10){
            seconds = "0" + seconds
        }
        return `${minutes}:${seconds}`
}

    render(){
        if(this.state.album){
        const tracks = this.state.album.tracks.items
        console.log(this.state.album)
        return (
            <section>
                <span className="album__total-time">Popularity: {this.state.album.popularity}% / Total time: {this.convertMilisecondsToMinutes(tracks.map((track) => track.duration_ms).reduce((track, next) => track+next))}</span>
                <table className="tracklist">
                    <thead className="tracklist__head">
                        <tr>
                            <td className="tracklist__datatype">Track no.</td>
                            <td className="tracklist__datatype">Title</td>
                            <td className="tracklist__datatype">Duration</td>
                        </tr>
                    </thead>
                    <tbody className="tracklist__body">
                        {tracks.map(track => (
                            <tr key={`${this.state.album.id}_${track.track_number}`}>
                                <td className="tracklist__datavalue">{track.track_number}</td>
                                <td className="tracklist__datavalue">{track.name}</td>
                                <td className="tracklist__datavalue">{this.convertMilisecondsToMinutes(track.duration_ms)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>)
        }else{
            return null
        }
    }
}