import React, { Component } from "react";
import "./FavoritePage.scss";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import Loading from "../Loading/Loading";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";

import weatherService from "../../services/weather-service";

class FavoritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: null,
      isLoading: true
    };
  }
  async componentDidMount() {
    const { getFavorited } = this.props.store;
    const favoritedData = await weatherService.getFavoritesData(
      toJS(getFavorited)
    );
    this.setState({ favorited: favoritedData, isLoading: false });
  }
  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <section className="favorite-page slide-in-fwd-center">
        <div className="wrapper">
          <h1>Favorited Places</h1>
          <div className="card-container">
            {this.state.favorited.map((fav, i) => (
              <FavoriteCard info={fav} key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default inject("store")(observer(FavoritePage));
