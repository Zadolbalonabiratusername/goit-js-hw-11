import showGallary from './js/pixabay-api';
import { showLoader, showMessage, galleryAllTemplate } from './js/render-functions';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('#search-text')
}


refs.form.addEventListener('submit', getBeautifulPictures);


function getBeautifulPictures(e) {
  e.preventDefault();
  const searchText = refs.input.value;

  if (!searchText.trim()) {
    showMessage();
    return;
  }

  refs.input.value = '';  
  showLoader();

  showGallary(searchText)
    .then(res => renderResults(res.data.hits));
}

function renderResults(images) {
  if (!images.length) showMessage();

  galleryAllTemplate(images);
}

