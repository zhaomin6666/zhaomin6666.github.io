document.addEventListener("page:loaded",()=>{document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(t=>{var e=t.dataset.src||t.src,a=document.createElement("a");a.classList.add("fancybox"),a.href=e,a.setAttribute("itemscope",""),a.setAttribute("itemtype","http://schema.org/ImageObject"),a.setAttribute("itemprop","url");let o="default";null!==t.closest(".post-gallery")?o="gallery":null!==t.closest(".group-picture")&&(o="group"),a.dataset.fancybox=o,(e=t.title||t.alt)&&(a.title=e,a.dataset.caption=e),t.wrap(a)}),Fancybox.bind("[data-fancybox]")});