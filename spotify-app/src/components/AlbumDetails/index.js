import React, { Component } from 'react'
import { GetAlbumDetails } from '../GetAlbumDetails'
import './AlbumDetails.scss'
import { Segment, Placeholder } from 'semantic-ui-react'

export default class AlbumDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            album: undefined
        }
        this.getDetails();
    }

    getDetails = () => {
        GetAlbumDetails(this.props.albumId, this.props.token)
            .then(album => {
                this.setState({
                    album: album
                })
            })
    }

    convertMiliseconds(timeInMs){
        let hour=0, minute=0, second=0
        while(timeInMs >= 3600000){
            timeInMs-= 3600000
            hour++
        }while(timeInMs >= 60000){
            timeInMs -= 60000
            minute++
        }while(timeInMs >= 1000){
            timeInMs -= 1000
            second++
        }
        return this.formatTime(hour, minute, second)
    }

    formatTime(hour, minute, second){
        if(hour < 10){
            hour = "0" + hour
        }if(minute < 10){
            minute = "0" + minute
        }if(second < 10){
            second = "0" + second
        }
    
        if(hour < 1){
            return `${minute}:${second}`
        }
        return `${hour}:${minute}:${second}`
    }
    
    render(){
        if(this.state.album){
        const tracks = this.state.album.tracks.items
        return (
            <section>
                <span className="album__total-time">Popularity: {this.state.album.popularity}% / Total time: {this.convertMiliseconds(tracks.map((track) => track.duration_ms).reduce((track, next) => track+next))}</span>
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
                                <td className="tracklist__datavalue">{this.convertMiliseconds(track.duration_ms)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>)
        }else{
            return (
            <Segment inverted>
            <Placeholder inverted fluid>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
            )
        }
    }
}