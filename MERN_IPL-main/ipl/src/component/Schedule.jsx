import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Match from './Match';
import Header from './Header1';
import '../App.css';

const Schedule = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get('http://localhost:5000/schedule');
                const data = response.data;
                setMatches(data);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };

        fetchSchedule();
    }, []); // Empty dependency array ensures useEffect runs once when the component mounts

    return (
        <>
            <Header name="SCHEDULE" />
            <div className="schedule">
                {matches.map((match) => (
                    <Match key={match.id} match={match} />
                ))}
            </div>
        </>
    );
};

export default Schedule;
