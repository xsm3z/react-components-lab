import React from 'react';

const WeatherData = ({ day, conditions, time }) => {

  return (
    <>
      <h2>{day}</h2>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </>
  );
  
};

export default WeatherData;
