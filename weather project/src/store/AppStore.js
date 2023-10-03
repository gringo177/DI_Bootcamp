import { observable, computed, action, decorate, toJS } from "mobx";
import storageService from "../services/storage-service";
const FAV_DATA = "favorite-data";
class AppStore {
  constructor() {
    const fav = storageService.loadFromStorage(FAV_DATA);
    if (fav) this.favorited = fav;
    else this.favorited = [];
  }

  get getFavorited() {
    return this.favorited;
  }
  addToFavorite = city => {
    const idx = this.favorited.findIndex(fav => fav.id === city.id);
    if (idx === -1) {
      this.favorited.push(city);
    } else {
      this.favorited.splice(idx, 1);
    }

   
    storageService.saveToStorage(FAV_DATA, this.favorited);
  };
}

decorate(AppStore, {
  getFavorited: computed,
  // isUserLoggedOn: computed,
  favorited: observable,
  // user: observable,
  // setUser: action,
  addToFavorite: action
  // disconnectUser: action
});

const App = new AppStore();
export default App;
