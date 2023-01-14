const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestaurantInfo = 'Favorite Resto is empty';

Scenario('showing favorite resto is empty', ({ I }) => {
  I.seeElement('#resto');
  I.see(emptyFavoriteRestaurantInfo, '#resto');
});

Scenario('liking one of the resto', async ({ I }) => {
  I.see(emptyFavoriteRestaurantInfo, '#resto');

  I.amOnPage('/');
  I.seeElement('.card');
  const firstResto = locate('.name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestoName = await I.grabTextFrom('.name a');
  assert.strictEqual(firstRestoName, likedRestoName); // membandingkan
});

Scenario('you like a resto then unlike that resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card');
  const firstResto = await I.grabTextFrom('.name a');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestoName = await I.grabTextFrom('.name a');
  I.click(likedRestoName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto');
  I.dontSeeElement('.card');
  I.dontSeeElement('.name a');
});
