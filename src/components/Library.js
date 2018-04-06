import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import '../styles/library.css';


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData
    };
  }
  render() {
    return (
      <section className="library">
        {
          this.state.albums.map((album, index) =>
            <div className="albums" key={index}>
              <Link to={`/album/${album.slug}`}>
                <img className="album-cover" src={album.albumCover} alt={album.title} />
              </Link>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;
