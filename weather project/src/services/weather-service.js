import axios from "axios";

async function getFavoritesData(favoritedArray) {
  let arr = [];
  for (let idx = 0; idx < favoritedArray.length; idx++) {
    let fav = favoritedArray[idx];
    try {
      let req = `https://dataservice.accuweather.com/currentconditions/v1/${
        fav.id
      }?apikey=EDoXcIUtqNmGbRlLbqNReSUUtgmnUHt0&language=en-us&details=falseHTTP/1.1`;
      let favInfo = await axios.get(req);
      favInfo = favInfo.data[0];

      fav.isDayTime = favInfo.IsDayTime;
      fav.temperature = favInfo.Temperature;
      fav.weatherText = favInfo.WeatherText;

      arr.push(fav);
    } catch (e) {}
  }
  return arr;
}

async function getFiveDaysForcast(cityid) {
  const req = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityid}?apikey=EDoXcIUtqNmGbRlLbqNReSUUtgmnUHt0&language=en-us&details=false&metric=false%20HTTP/1.1`;
  return axios.get(req);
}
async function getAutoCompOptions(val) {
  const req =
     `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09EDoXcIUtqNmGbRlLbqNReSUUtgmnUHt0&q=${val}&language=en-us HTTP/1.1`;
  return axios.get(req);
}
function manageAutoCompOptions(options) {
  var arr = options.data.reduce((acc, el) => {
    acc.push({ id: el.Key, label: el.LocalizedName });
    return acc;
  }, []);

  return arr;
}
function manageDaysForcasts(forcastData) {
  var temp = forcastData.data.DailyForecasts;
  var arr = temp.reduce((acc, el) => {
    acc.push({
      time: el.EpochDate,
      min: el.Temperature.Minimum.Value,
      max: el.Temperature.Maximum.Value,
      weatherText: el.Day.IconPhrase
    });
    return acc;
  }, []);
  return arr;
}

export default {
  manageAutoCompOptions,
  manageDaysForcasts,
  getFiveDaysForcast,
  getFavoritesData,
  getAutoCompOptions
};
