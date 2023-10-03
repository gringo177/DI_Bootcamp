import React, { Component } from "react";
import "./WeatherPage.scss";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//cmps
import ReactAutocomplete from "react-autocomplete";
import HeartCheckbox from "../../assets/HeartCheckBox/HeartCheckBox";
import DaysCardList from "../../Components/DaysCardList/DaysCardList";

//services

import weatherService from "../../services/weather-service";

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [],
      selectedCity: null,
      daysData: [],
      favoritedList: [],
      checked: false
    };
  }

  async componentDidMount() {
    //check witch city to show
    const { getFavorited } = this.props.store;
    const favoritedListArr = toJS(getFavorited);
    const { cityname, cityid } = this.props.match.params;
    const selected =
      cityname && cityid
        ? { id: cityid, label: cityname }
        : { id: "215854", label: "Tel-aviv" };
    let idx = favoritedListArr.findIndex(el => el.id === selected.id);
    const isFavorite = idx > -1 ? true : false;
    //fetching city data
    try {
      const data = await weatherService.getFiveDaysForcast(selected.id);
      const fiveDays = weatherService.manageDaysForcasts(data);
      this.setState({
        daysData: fiveDays,
        value: selected.label,
        selectedCity: selected,
        favoritedList: favoritedListArr,
        checked: isFavorite
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleFavoriteClick = () => {
    const { addToFavorite } = this.props.store;
    if (this.state.selectedCity) {
      this.setState((prevState, props) => ({
        checked: !prevState.checked
      }));
      addToFavorite(this.state.selectedCity);
      const { getFavorited } = this.props.store;
      const favoritedList = toJS(getFavorited);
      if (favoritedList.length > 0) {
        let idx = favoritedList.findIndex(
          fav => fav.id == this.state.selectedCity.id
        );
        if (idx > -1) {
          //removing locally unfavorited place
          let arr = favoritedList.splice(idx, 1);
          this.setState({ favoritedList: arr });
        }
      }
    }
  };
  handleChange = async e => {
    this.setState({ value: e.target.value });
    let reg = /^[a-z]+$/i;
    if (!reg.test(e.target.value)) {
      const notify = () => toast.error("Use english letters only");
      notify();
    } else {
      try {
        const options = await weatherService.getAutoCompOptions(e.target.value);
        const handledOptions = weatherService.manageAutoCompOptions(options);
        this.setState({ options: handledOptions });
      } catch (e) {
        console.log("error on fetching options", e);
      }
    }
  };
  handleSelect = async val => {
    const selected = this.state.options.find(el => el.label === val);
    const data = await weatherService.getFiveDaysForcast(selected.id);
    const forcast = weatherService.manageDaysForcasts(data);
    this.setState({ selectedCity: selected, value: val, daysData: forcast });
  };
  render() {
    return (
      <section className="weather-page slide-in-fwd-center">
        <div className="input-section">
          <label className="city-label">Enter city</label>
          <ReactAutocomplete
            items={this.state.options}
            shouldItemRender={(item, value) =>
              item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: highlighted ? "#eee" : "transparent"
                }}
              >
                {item.label}
              </div>
            )}
            value={this.state.value}
            onChange={this.handleChange}
            onSelect={val => this.handleSelect(val)}
          />
        </div>
        <div className="favorite-heart">
          <label>Mark as favorite</label>
          <HeartCheckbox
            checked={this.state.checked}
            onClick={this.handleFavoriteClick}
          />
        </div>

        <div className="forcast-card-container">
          <DaysCardList forcast={this.state.daysData} />
        </div>
      </section>
    );
  }
}
export default inject("store")(observer(WeatherPage));
