import{a as f,S as p,i as m}from"./assets/vendor-DTWVMNYS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=f.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function y(r){return d.get("",{params:{q:r}}).then(s=>s.data.hits)}let i;function g(r){const s=document.querySelector(".gallery"),o=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:l,downloads:c,comments:u})=>`
    <a href="${e}" class="gallery_item">
      <img src="${n}" alt="${t}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${a}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${l}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${c}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${u}</span>
  </li>
</ul>
    </a>
  `).join("");s.innerHTML=o,i?i.refresh():i=new p(".gallery a")}const h=document.querySelector(".form"),L=document.querySelector('[name="search-text"]');h.addEventListener("submit",r=>{r.preventDefault(),y(L.value).then(s=>{s.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!"}),g(s)})});
//# sourceMappingURL=index.js.map
