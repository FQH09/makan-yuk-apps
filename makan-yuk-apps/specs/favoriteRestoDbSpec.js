import FavoriteRestoDb from '../src/scripts/data/favorite-resto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoDb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoDb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoDb);
});
