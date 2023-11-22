import React, { useState, useEffect, Fragment } from 'react';

const Time = ({ timezones }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const getTimeForZone = (timezone) => {
        // Convert the current time to the given timezone
        const offset = parseInt(timezone.split(':')[0].substring(3));
        const localTime = new Date(currentTime.getTime() + offset * 3600 * 1000);
        // Format the time to exclude seconds
        return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

    return (
        <Fragment>
            <div>
                <h2>Time</h2>
                {timezones.map((timezone, index) => (
                    <div key={index}>
                        {timezone}: {getTimeForZone(timezone)}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Time;
