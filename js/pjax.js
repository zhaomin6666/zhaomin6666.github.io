const pjax=new Pjax({selectors:["head title",'script[type="application/json"]',".post-toc-wrap",".main-inner",".languages",".pjax"],switches:{".post-toc-wrap":function(e,t){if(t.querySelector(".post-toc"))Pjax.switches.outerHTML.call(this,e,t);else{const o=e.querySelector(".post-toc");o&&o.classList.add("placeholder-toc"),this.onSwitch()}}},analytics:!1,cacheBust:!1,scrollTo:!CONFIG.bookmark.enable});document.addEventListener("pjax:success",()=>{var e;pjax.executeScripts(document.querySelectorAll("script[data-pjax]")),NexT.boot.refresh(),CONFIG.motion.enable&&NexT.motion.integrator.init().add(NexT.motion.middleWares.subMenu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(),"remove"!==CONFIG.sidebar.display&&(e=document.querySelector(".post-toc:not(.placeholder-toc)"),document.querySelector(".sidebar-inner").classList.toggle("sidebar-nav-active",e),NexT.utils.activateSidebarPanel(e?0:1),NexT.utils.updateSidebarPosition())});