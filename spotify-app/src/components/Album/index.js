import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './Album.scss'
import AlbumDetails from '../AlbumDetails'
import imagePlaceholder from '../../assets/image_placeholder.png'

export default class Album extends Component{
    constructor(props){
        super(props);
        this.state = {
            album: this.props.album,
            shouldDetailsBeDisplayed: false
        }
    }

    toggleDetails = () => {
      this.setState({
          shouldDetailsBeDisplayed: !this.state.shouldDetailsBeDisplayed
      })
    }

    render(){
        const album = this.state.album
        return (
        <li className="album-container">
            <div className="album">
            <img src={album.images[1] ? album.images[1].url : imagePlaceholder} alt="" className="album__image"/>
            <section className="album__info">
                <h2 className="album__title">{album.name}</h2>
                <h3 className="album__artists">{album.artists.map(artist => `${artist.name}, `).join(" " ).slice(0, -2)}</h3> 
                <div className="album__details">
                    <span>{album.release_date}</span> / <span>{album.total_tracks === 1 ? `${album.total_tracks} track` : `${album.total_tracks} tracks`}</span>
                    {this.state.shouldDetailsBeDisplayed ? <span></span> : null}
                </div>
                <button className="btn__expand" onClick={this.toggleDetails}>
                    {this.state.shouldDetailsBeDisplayed ? "Hide details " : "Show more "}
                    {this.state.shouldDetailsBeDisplayed ?  <Icon name='chevron up'/> : <Icon name='chevron down'/> }
                </button>
            </section>
            </div>
            {this.state.shouldDetailsBeDisplayed ? <AlbumDetails albumId={album.id} token={this.props.token}/> : null}
        </li>
        )
    }
} 