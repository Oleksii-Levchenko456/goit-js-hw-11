import{a as d,S as p,i}from"./assets/vendor-DTWVMNYS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y=d.create({baseURL:"https://pixabay.com/api/",params:{key:"51662692-15f66b8f148fe09f1ff22625f",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function g(a){return y.get("",{params:{q:a}}).then(r=>r.data.hits)}let l;function h(a){const r=document.querySelector(".gallery"),n=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:s,views:u,downloads:f,comments:m})=>`
    <a href="${e}" class="gallery_item">
      <img src="${o}" alt="${t}" loading="lazy" />

<ul class="stats-container">
  <li class="stat-item">
    <span>Likes</span>
    <span>${s}</span>
  </li>
  <li class="stat-item">
    <span>Views</span>
    <span>${u}</span>
  </li>
  <li class="stat-item">
    <span>Comments</span>
    <span>${m}</span>
  </li>
  <li class="stat-item">
    <span>Downloads</span>
    <span>${f}</span>
  </li>
</ul>
    </a>
  `).join("");r.innerHTML=n,l?l.refresh():l=new p(".gallery a")}function L(){const a=document.querySelector(".gallery");a.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("is-not-active")}function S(){document.querySelector(".loader").classList.add("is-not-active")}const b=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');b.addEventListener("submit",a=>{if(a.preventDefault(),console.log(c.value),c.value.trim()===""){i.error({message:"enter text, please!"});return}L(),v(),g(c.value.trim()).then(r=>{r.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(r)}).catch(r=>{i.error({message:"Please try again later"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
