import React from "react";
import { HashRouter, Route } from "react-router-dom";

//Pages
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";

import Navbar from "./Components/Navbar/Navbar";

const Router = () => {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path="/" component={WeatherPage} />
      <Route exact path="/favorite" component={FavoritePage} />
      <Route exact path="/home/:cityname/:cityid" component={WeatherPage} />

    </HashRouter>
  );
};
export default Router;
