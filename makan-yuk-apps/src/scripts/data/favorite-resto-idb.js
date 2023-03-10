import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbOpen = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteRestoDb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbOpen).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await dbOpen).getAll(OBJECT_STORE_NAME);
  },

  async putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbOpen).put(OBJECT_STORE_NAME, resto);
  },

  async deleteResto(id) {
    return (await dbOpen).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoDb;
