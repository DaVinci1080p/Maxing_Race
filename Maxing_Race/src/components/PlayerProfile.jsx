import { useEffect } from 'react';

//var PlayerName = 'Reaper_Boi';
const profile_URL =
    'https://apps.runescape.com/runemetrics/profile/profile?user=' + PlayerName + '&activities=20';

const PlayerProfile = () => {
    const searchPlayer = async (PlayerName) => {
        const response = await fetch(`${profile_URL}&s=${PlayerName}`);
        const data = await response.json();

        console.log(data);
    };

    useEffect(() => {}, []);

    return <h1>Player Profile</h1>;
};

export default PlayerProfile;
