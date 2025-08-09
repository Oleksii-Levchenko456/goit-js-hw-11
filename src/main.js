// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";

const form = document.querySelector('.form')
const searchText = document.querySelector('[name="search-text"]')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getImagesByQuery(searchText.value).then(images => {
        if (images.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            })
        }
        createGallery(images)
    })
})