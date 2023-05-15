import{c as v,b as P,f as X,a as J,d as Q,e as V,g as ee,r as te,h as R,i as M,j as ne}from"./light-dark-theme-3e2a56bc.js";var G="Expected a function",C=0/0,ie="[object Symbol]",oe=/^\s+|\s+$/g,se=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,re=/^0o[0-7]+$/i,le=parseInt,ce=typeof v=="object"&&v&&v.Object===Object&&v,de=typeof self=="object"&&self&&self.Object===Object&&self,ge=ce||de||Function("return this")(),he=Object.prototype,me=he.toString,ue=Math.max,fe=Math.min,$=function(){return ge.Date.now()};function pe(e,t,n){var i,o,s,l,a,d,m=0,I=!1,u=!1,T=!0;if(typeof e!="function")throw new TypeError(G);t=O(t)||0,S(n)&&(I=!!n.leading,u="maxWait"in n,s=u?ue(O(n.maxWait)||0,t):s,T="trailing"in n?!!n.trailing:T);function w(r){var g=i,f=o;return i=o=void 0,m=r,l=e.apply(f,g),l}function K(r){return m=r,a=setTimeout(k,t),I?w(r):l}function F(r){var g=r-d,f=r-m,x=t-g;return u?fe(x,s-f):x}function q(r){var g=r-d,f=r-m;return d===void 0||g>=t||g<0||u&&f>=s}function k(){var r=$();if(q(r))return B(r);a=setTimeout(k,F(r))}function B(r){return a=void 0,T&&i?w(r):(i=o=void 0,l)}function U(){a!==void 0&&clearTimeout(a),m=0,i=d=o=a=void 0}function Z(){return a===void 0?l:B($())}function j(){var r=$(),g=q(r);if(i=arguments,o=this,d=r,g){if(a===void 0)return K(d);if(u)return a=setTimeout(k,t),w(d)}return a===void 0&&(a=setTimeout(k,t)),l}return j.cancel=U,j.flush=Z,j}function be(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(G);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),pe(e,t,{leading:i,maxWait:t,trailing:o})}function S(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ye(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||ye(e)&&me.call(e)==ie}function O(e){if(typeof e=="number")return e;if(ke(e))return C;if(S(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=S(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(oe,"");var n=ae.test(e);return n||re.test(e)?le(e.slice(2),n?2:8):se.test(e)?C:+e}var ve=be;function A(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}function N(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function _(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const{bookInfo:h,modal:Le}=A();function W(e){let t="",n=0;const i=e.currentTarget.dataset.id;(P===null?-1:P.findIndex(s=>s._id===i))!==-1?(t="Remove from shopping list",n=501):(t="ADD TO SHOPPING LIST",n=465),X(e.currentTarget.dataset.id).then(s=>{h.style.height=`${n}px`,h.innerHTML="";const l=`<div class="img-book" style="background-image: url('${s.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${s.title}</h2>
                        <h3 class="title-author">${s.author}</h3>
                        <p class="description-book">${s.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                          <a href="${s.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${J}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[1].url}" target="_blank">
                            <img
                            src="${Q}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[4].url}" target="_blank">
                            <img
                            src="${V}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                          </a>
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${s._id}">${t}</button>
                    <p class="congrats"></p>`;h.insertAdjacentHTML("beforeend",l),Le.classList.remove("is-hidden"),document.body.style.overflow="hidden",D();const a=document.querySelector(".choice-btn");a.addEventListener("click",d=>{a.innerHTML==="ADD TO SHOPPING LIST"?(ee(d),document.documentElement.clientWidth<768?h.style.height="806px":h.style.height="501px",a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(document.documentElement.clientWidth<768?h.style.height="762px":h.style.height="465px",a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",te(d))})})}function D(){const e=document.querySelector(".container-modal-fav"),t=document.querySelector(".choice-btn");t.innerHTML==="Remove from shopping list"?(t.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",document.documentElement.clientWidth<768?e.style.height="806px":e.style.height="501px"):(t.nextElementSibling.innerHTML="",document.documentElement.clientWidth<768?e.style.height="762px":e.style.height="465px")}function y(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",W);for(let n=0;n<t.length;n++)t[n].addEventListener("click",W)}const{galleryRef:p,categoriesRef:Se}=A();function L(e){if(p.innerHTML="",e.target.innerHTML==="See more"){p.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),p.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const i=document.querySelector(".gallery-list2"),o=e.target.dataset.category.split(" ").join("%20");R(o).then(s=>{s.map(l=>{i.insertAdjacentHTML("beforeend",N(l))}),y()}),Se.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){E(),window.scrollTo(0,0);return}p.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),p.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),n=e.target.innerHTML.trim().split(" ").join("%20");R(n).then(i=>{i.map(o=>t.insertAdjacentHTML("beforeend",N(o))),y()}),window.scrollTo(0,0)}const{galleryRef:c}=A();function E(){c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let n of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",_(n.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);y()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let n of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const i=document.querySelectorAll(".gallery-list"),o=i[i.length-1];for(let s=0;s<3;s++)o.insertAdjacentHTML("beforeend",_(n.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);y()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let i of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${i.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const o=t[t.length-1];for(let s=0;s<5;s++)o.insertAdjacentHTML("beforeend",_(i.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${i.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let i=0;i<n.length;i++)n[i].addEventListener("click",L);y()})),window.scrollTo(0,0)}E();let b=document.documentElement.clientWidth;onresize=ve(e=>{e.preventDefault();let t=document.documentElement.clientWidth;b<768?t>767&&(H(),b=t):b<1440?(t>1439||t<768)&&(H(),b=t):t<1440&&(H(),b=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||D()},100);function H(){document.querySelector(".active").innerHTML.trim()==="All categories"&&E()}const Y=document.querySelector(".nav-categories-list");async function Te(){const{data:e}=await ne.get("https://books-backend.p.goit.global/books/category-list");return e}const we=async()=>{try{const e=await Te();Y.innerHTML=await Me(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",i=>{const o=document.querySelector(".nav-category-item.active");o&&o.classList.remove("active"),i.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};we();Y.addEventListener("click",je);function je(e){e.target.dataset.id&&L(e)}function Me(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",i),document.addEventListener("keydown",t);function t(o){o.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),console.log("esc"))}e.modal.addEventListener("click",n);function n(o){o.target===o.currentTarget&&i()}function i(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();window.onload=function(){const e=document.documentElement.scrollHeight;({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>.8*e&&innerWidth>=768?this.show():this.hide()}),this.el.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()};const $e="/js_76_PetroShutak/assets/petro-shutak-d723eaf7.jpg",_e="/js_76_PetroShutak/assets/tatiana-tereshchenko-50080e28.jpg",He="/js_76_PetroShutak/assets/andrii-zlotnikov-2c9323af.jpg",Ae="/js_76_PetroShutak/assets/yuliia-karas-027ddc77.jpg",Ee="/js_76_PetroShutak/assets/kostiantyn-krysenko-f6965b47.jpg",Ie="/js_76_PetroShutak/assets/anatolii-shkurpela-7cd475ea.jpg",qe="/js_76_PetroShutak/assets/yuliia-usova-4c95717e.jpg",Be="/js_76_PetroShutak/assets/petro-kostrytsia-754f28b4.jpg",xe="/js_76_PetroShutak/assets/serhii-kotkov-8c386b2f.jpg",Pe=[{memberName:"Petro <br> Shutak",photo:$e,github:"https://github.com/PetroShutak",linkedIn:"https://www.linkedin.com/in/petroshutak/",width:40,height:60},{memberName:"Tatiana Tereshchenko",photo:_e,github:"https://github.com/Tatiana-Tereshchenko",linkedIn:"https://www.linkedin.com/in/tetianatereshchenkoko-41a478262/",width:40,height:60},{memberName:"Sergii <br> Kotkov",photo:xe,github:"https://github.com/Serhii-K5",iconGit:"../images/sprite.svg#icon-github",linkedIn:"http://www.linkedin.com/in/serhii-kotkov",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Andrii Zlotnikov",photo:He,github:"https://github.com/AndriiZlt",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/andrii-zlotnikov-9bab42153",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Yuliia <br> Karas",photo:Ae,github:"https://github.com/Yuliia-Karas",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/yuliia-karas-38991b274/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Kostiantyn Krysenko",photo:Ee,github:"https://github.com/barkode",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/kostiantyn-krysenko-b721aa3a/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Anatolii Shkurpela",photo:Ie,github:"https://github.com/AnatoliiShkurpela",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/anatolii-shkurpela-a8949b273/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Yuliia <br> Usova",photo:qe,github:"https://github.com/Iuliia23",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/julia-usova-a8802b276/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Petro Kostrytsia",photo:Be,github:"https://github.com/petekostrytsya",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/petro-kostrytsia-64838a265/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60}],z="/js_76_PetroShutak/assets/sprite-84dba2d7.svg",Re=`${z}#icon-github`,Ce=`${z}#icon-linkedin`,Oe=Pe.reduce((e,t)=>{const{memberName:n,photo:i,github:o,linkedIn:s,width:l,height:a}=t;return e+=` <li class="employees-card">
  <img class="employees-img"
    src="${i}"
    alt="${n}"
    width="${l}"
    height="${a}"
  />
  <h3 class="employees-name">${n}</h3>
  <ul class="social-list">
    <li class="social-list-itam">
      <a href="${o}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${Re}"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${s}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${Ce}"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`},""),Ne=document.querySelector(".employees-item");Ne.insertAdjacentHTML("afterbegin",Oe);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-command]"),closeModalBtn:document.querySelector("[data-modal-close-command]"),modal:document.querySelector("[data-modal-command]")};document.addEventListener("keydown",t);function t(o){o.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t))}e.openModalBtn.addEventListener("click",i),e.modal.addEventListener("click",n);function n(o){e.modal.classList.add("is-hidden"),o.target,o.currentTarget}function i(o){o.preventDefault(),e.modal.classList.toggle("is-hidden"),document.body.style.overflow=document.body.style.overflow==="hidden"?"":"hidden"}})();
