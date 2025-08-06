function getImagesByQuery(query){
    const BASE_URL = 'https://pixabay.com'
    const END_POINT = '/api/'
    const params = new URLSearchParams({
        key: '51662692-15f66b8f148fe09f1ff22625f',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    })
}
getImagesByQuery(flowers)