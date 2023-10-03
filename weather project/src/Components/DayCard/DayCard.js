import React from "react";
import './DayCard.scss';
const DayCard = props => {
  const { dayInfo } = props;

  var day = new Date(0);
  let formatedDay = new Date(day.setUTCSeconds(dayInfo.time));
  let last = formatedDay.toDateString().substring(0, 3);
  return (
    <section className="day-card" >
      <div  className="day-card-container">
        <h3>{last}</h3>
      <h3>{dayInfo.max}-{dayInfo.min} F</h3>
      <h3 className="weather-info">{dayInfo.weatherText}</h3>
      </div>
    </section>
  );
};

export default DayCard;
