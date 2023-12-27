import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAnimeLogoPath } from './helper/animeNameHelper';

export const App: React.FC = () => {
  const NotFoundAnime = 'Anime not found ;(';

  const [animeLogoPath, setAnimeLogoPath] = useState(logo);
  const [animeName, setAnimeName] = useState('');

  useEffect(() => {
    fetch('http://localhost:5178/anime/')
      .then(response => response.json())
      .then(data => {
        setAnimeName(data.animeName || NotFoundAnime);
        setAnimeLogoPath(getAnimeLogoPath(data.animeName) || logo);
      })
      .catch(() => {
        setAnimeName(NotFoundAnime);
        setAnimeLogoPath(logo);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your anime:</h1>
        <br/>
        <img src={animeLogoPath} className="App-logo" alt="logo" />
        <h2>{animeName}</h2>
      </header>
    </div>
  );
}

export default App;
