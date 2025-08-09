import SimpleLightbox from "simplelightbox";

let lightboxInstance;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, downloads, comments}) => `
    <a href="${largeImageURL}" class="gallery_item">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${likes}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${views}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${downloads}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${comments}</span>
  </li>
</ul>
    </a>
  `).join('');

  galleryContainer.innerHTML = markup;

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a');
  } else {
    lightboxInstance.refresh();
  }}

  export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

export function showLoader(){

}
export function hideLoader(){

}