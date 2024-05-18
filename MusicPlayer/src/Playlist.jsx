import React from 'react';
import './Playlist.css';

function Playlist({ playlist, onFileClick }) {
  const firstFive = playlist.slice(0, 5);

  return (
    <div className="playlistcard" onClick={onFileClick}>
      <div>
        <h2>Playlist</h2>
        <ul>
          {firstFive.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
