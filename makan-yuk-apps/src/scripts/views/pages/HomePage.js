import RestoSource from '../../data/restodb-source';
import { restoItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <div class="content">
            <h2 class="heading">Cari Restaurant</h2>
            <div id="resto" class"resto">
            </div>
        <div/>`;
  },

  async afterRender() {
    const resto = await RestoSource.getRestaurantList();
    const restoContainer = document.querySelector('#resto');

    resto.forEach((restoes) => {
      restoContainer.innerHTML += restoItemTemplate(restoes);
    });
  },
};

export default HomePage;
