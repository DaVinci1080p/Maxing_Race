import { useEffect, useState } from 'react';
import './css/App.css';

const profile_URL = 'https://apps.runescape.com/runemetrics/profile?user=';
const App = () => {
    const makeAPICall = async () => {
        try {
            const response = await fetch('https://localhost:3000/api/facts');
            const data = await response.json();
            console.log({ data });
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        makeAPICall();
    }, []);

    /*const searchPlayer = async (PlayerName) => {
        const response = await fetch(`${profile_URL}${PlayerName}`);
        const data = await response.json();

        console.log(data);
    };
    useEffect(() => {
        searchPlayer('ReaperBoi');
    }, []);

    return (
        <div className="App">
            <h1>React Cors Guide</h1>
        </div>
    );*/
};

export default App;
