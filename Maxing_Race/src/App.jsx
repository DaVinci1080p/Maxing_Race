import { useEffect, useState } from 'react';
import React from 'react';
import './css/App.css';

import SkillCard from './components/SkillCard';
import SearchIcon from './img/search.svg';

const profile_URL = 'https://apps.runescape.com/runemetrics/profile?user=';
const cors_server = 'https://vincis-cors.herokuapp.com/';

const App = () => {
  const [player, setPlayer] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchPlayer = async (PlayerName) => {
    const response = await fetch(`${cors_server}${profile_URL}${PlayerName}`);
    const data = await response.json();

    console.log(data.skillvalues);
    setPlayer(data.skillvalues);
  };
  useEffect(() => {
    searchPlayer('');
  }, []);

  return (
    <div className="app">
      <h1>Maxing competition</h1>
      <div className="search">
        <input
          placeholder="Search player"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchPlayer(searchTerm);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchPlayer(searchTerm)}
        />
      </div>
      {player?.length > 0 ? (
        <div className="container">
          {React.Children.toArray(
            player.map((skill) => <SkillCard Skills={skill} />)
          )}
        </div>
      ) : (
        <div className="empty">
          <h2>No skills found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
