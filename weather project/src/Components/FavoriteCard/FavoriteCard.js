import React from "react";
import { NavLink } from "react-router-dom";
import './FavoriteCard.scss';
const FavoriteCard = props => {
  const { info } = props;
  const path=`/home/${info.label}/${info.id}`
  const {isDayTime}=info;
  return (

    <NavLink to={path}>
    <section className="favorite-card" style={styles.card}>

      <h3 style={styles.h3}>{info.label}</h3>
      <h3 style={styles.h3}>{info.weatherText}</h3>
      <h3 style={styles.h3}>{info.temperature.Imperial.Value} F</h3>
      <div style={styles.imgConatiner}>
      {isDayTime && <img src="https://res.cloudinary.com/explority/image/upload/c_scale,h_120/v1564228822/sun_qwmb3w.jpg"/>}
      {!isDayTime && <img src="https://res.cloudinary.com/explority/image/upload/c_scale,h_120/v1564228823/moon_dvwkkt.jpg"/>}
        </div>
    </section>
    </NavLink>
  );
};
var styles = {
  h3: {
    marginTop: 6
  },
  card: {
    backgroundColor:'white',
    display:"block",  
    minWidth: 168,
    maxWidth:168,
    height: 200,
    boxShadow: "0 1px 5px 1px rgba(0,0,0,.15)",
    margin: 15,
    borderRadius:'4px'
  },
  imgConatiner: {},
  img: {}
};

export default FavoriteCard;
