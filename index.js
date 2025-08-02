import"./assets/styles-CbQg_zt0.js";import{S as i,i as l}from"./assets/vendor-5ObWk2rO.js";const d="51472823-0b845592ea2e5832f333594f9",m=async e=>{const s=`https://pixabay.com/api/?key=${d}&q=${e}`;return(await fetch(s)).json()},u=({webformatURL:e,pageURL:s,downloads:a,views:t,comments:o,likes:r})=>{const c=document.createElement("div");return c.classList.add("card-container"),c.innerHTML=`
  	<a class="gallery-link" href="${e}">
    <img src=${e}>
    <div class="card-info">
    <div class="card-like">
    <b>Downloads</b></br>${a}
    </div>
    <div class="card-comment">
    <b>Views</b></br>${t}
    </div>
    <div class="card-save">
    <b>Comments</b></br>${o}
    </div>
    <div class="card-save">
    <b>Likes</b></br>${r}
    </div>
    </div>
    <div>
    `,c},p=async e=>{const s=document.querySelector(".container-gallery"),{hits:a}=await m(e),t=a.map(u);s.replaceChildren(...t),console.log(a)},v=()=>{n.value!==""?p(n.value):l.show({title:"Hata",message:"Arama kutusu boş olamaz!",position:"topRight"})},n=document.querySelector(".search-input"),b=document.querySelector(".search-button");b.addEventListener("click",v);new i(".container-gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=index.js.map
