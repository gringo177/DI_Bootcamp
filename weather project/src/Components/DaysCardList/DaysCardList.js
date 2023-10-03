import React, { Component } from "react";
import DayCard from "../DayCard/DayCard";
import "./DaysCardList.scss";
const DaysCardList = props => {
  const { forcast } = props;

  return (
    <section className="days-card-list">
      {forcast.map((day, i) => {
        return <DayCard dayInfo={day} key={i} />;
      })}
    </section>
  );
};

export default DaysCardList;
