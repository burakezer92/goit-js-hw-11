import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const key = '51472823-0b845592ea2e5832f333594f9';

const searchImages = async text => {  
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url);
  return response.json();
};

const createCard = ({
  webformatURL,
  pageURL,
  downloads,
  views,
  comments,
  likes,
}) => {
  const card = document.createElement('div');
  card.classList.add('card-container');
  card.innerHTML = `
  	<a class="gallery-link" href="${webformatURL}">
    <img src=${webformatURL}>
    <div class="card-info">
    <div class="card-like">
    <b>Downloads</b></br>${downloads}
    </div>
    <div class="card-comment">
    <b>Views</b></br>${views}
    </div>
    <div class="card-save">
    <b>Comments</b></br>${comments}
    </div>
    <div class="card-save">
    <b>Likes</b></br>${likes}
    </div>
    </div>
    <div>
    `;
  return card;
};

const loadGallery = async text => {
  const container = document.querySelector('.container-gallery');
  const { hits } = await searchImages(text);
  const cards = hits.map(createCard);
  container.replaceChildren(...cards);
  console.log(hits);
};

const emptyControl = () => {
  if (searchInput.value !== '') {
      loadGallery(searchInput.value);
    } else {
      iziToast.show({
        title: 'Hata',
        message: 'Arama kutusu boş olamaz!',
        position: 'topRight',
      });
    }
};

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', emptyControl);

let galleryShow = new SimpleLightbox('.container-gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
});