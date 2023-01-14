import FavoriteRestoDb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoDb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
