!function(){const c=e=>(e=encodeURI(e),document.getElementById(e).querySelector(".leancloud-visitors-count")),{app_id:i,app_key:a,server_url:e}=CONFIG.leancloud_visitors,t=n=>{var e=(e,t,o)=>fetch(n+"/1.1"+t,{method:e,headers:{"X-LC-Id":i,"X-LC-Key":a,"Content-Type":"application/json"},body:JSON.stringify(o)});if(CONFIG.page.isPost){if(CONFIG.hostname===location.hostname){var t=e,o=document.querySelector(".leancloud_visitors");const r=decodeURI(o.id),s=o.dataset.flagTitle;t("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:r}))).then(e=>e.json()).then(({results:e})=>{0<e.length?(e=e[0],c(r).innerText=e.time+1,t("put","/classes/Counter/"+e.objectId,{time:{__op:"Increment",amount:1}}).catch(e=>{console.error("Failed to save visitor count",e)})):CONFIG.leancloud_visitors.security?(c(r).innerText="Counter not initialized! More info at console err msg.",console.error("ATTENTION! LeanCloud counter has security bug, see how to solve it here: https://github.com/theme-next/hexo-leancloud-counter-security. \n However, you can still use LeanCloud without security, by setting `security` option to `false`.")):t("post","/classes/Counter",{title:s,url:r,time:1}).then(e=>e.json()).then(()=>{c(r).innerText=1}).catch(e=>{console.error("Failed to create",e)})}).catch(e=>{console.error("LeanCloud Counter Error",e)})}}else if(1<=document.querySelectorAll(".post-title-link").length){o=e;const l=[...document.querySelectorAll(".leancloud_visitors")].map(e=>decodeURI(e.id));o("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:{$in:l}}))).then(e=>e.json()).then(({results:e})=>{for(const o of l){var t=e.find(e=>e.url===o);c(o).innerText=t?t.time:0}}).catch(e=>{console.error("LeanCloud Counter Error",e)})}};let o;e?o=e:"-MdYXbMMI"===i.slice(-9)&&(o=`https://${i.slice(0,8).toLowerCase()}.api.lncldglobal.com`),document.addEventListener("page:loaded",()=>{o?t(o):fetch("https://app-router.leancloud.cn/2/route?appId="+i).then(e=>e.json()).then(({api_server:e})=>{t("https://"+e)})})}();