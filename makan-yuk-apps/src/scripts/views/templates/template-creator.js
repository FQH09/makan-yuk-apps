import CONFIG from '../../globals/config';

const restoItemTemplate = (resto) => `
<div tabindex="0" class="card">     
  <div class="card-image">
    <picture>
      <img class="resto-image lazyload" alt="photo  ${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL_SM + resto.pictureId}"/>
    </picture>
  </div>
  <div tabindex="0" class="card-content">
    <h2 class="name"><a href="/#/detail/${resto.id}">${resto.name}</a></h2> 
    <p class="city">${resto.city}</p> 
  </div>
</div>`;

const restoDetailTemplate = (resto) => `
    <h2 class="name">${resto.name}</h2>
    <img class="resto-image-detail lazyload" alt="photo  ${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL_MD + resto.pictureId}"/>
    <div class="resto-info">
        <h3 class="head-info">Alamat<h3/>
        <p class="content-info">${resto.address}, ${resto.city}</p>
        <h3 class="head-info">Rating<h3/>
        <p class="content-info">⭐️<span>${resto.rating}</span></p>
        <h3 class="head-info">Deskripsi<h3/>
        <p class="content-info">${resto.description}</p>
        <h3 class="head-info">Menu<h3/>
        <div class="menu-resto">
            <h4>Makanan :</h4>
            <ul>${resto.menus.foods.map((key, i) => `
                <li><p>${i + 1}) ${key.name}</p></li>`).join('')}
            <ul>
            <h4>Minuman :</h4>
            <ul>${resto.menus.drinks.map((key, i) => `
                <li><p>${i + 1}) ${key.name}</p></li>`).join('')}
            <ul>
        </div>
        <h3 class="head-info">Reviews :</h2>
        <p></p>
    </div> 
    <div class="review">
      ${resto.customerReviews.map((key) => `
        <div class="detail-review">
            <p class="reviewer">${key.name}</p>
            <p class="date">${key.date}</p>
            <p class="reviews">${key.review}</p>
        </div>`).join('')}
    </div>
`;

const likeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const unlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemTemplate,
  restoDetailTemplate,
  likeRestoButtonTemplate,
  unlikeRestoButtonTemplate,
};
