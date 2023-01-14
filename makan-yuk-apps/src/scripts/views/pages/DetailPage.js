import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/restodb-source';
import { restoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoDb from '../../data/favorite-resto-idb';

const DetailPage = {
  async render() {
    return `
      <div>
        <div id="resto-detail" class"resto-detail"></div>
        <div id="likeButtonContainer"></div>
      </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoSource.getRestaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = restoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoDb,
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        city: resto.city,
      },
    });
  },
};

export default DetailPage;
