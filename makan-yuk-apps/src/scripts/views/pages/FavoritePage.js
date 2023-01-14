import FavoriteRestoDb from '../../data/favorite-resto-idb';
import { restoItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
        <div class="content">
            <h2 class="heading">Favorite Restaurant</h2>
            <div id="resto" class"resto">
            </div>
        <div/>`;
  },

  async afterRender() {
    const resto = await FavoriteRestoDb.getAllResto();
    const restoContainer = document.querySelector('#resto');

    if (resto.length === 0) {
      restoContainer.innerHTML = `
      Favorite Resto is empty.
      `;
    }

    // display all fav resto
    resto.forEach((restoes) => {
      restoContainer.innerHTML += restoItemTemplate(restoes);
    });
  },
};

export default FavoritePage;
