document.addEventListener('DOMContentLoaded',()=>{
  function qs(s,r=document){return r.querySelector(s);}
  async function carregar(url,push=true){
    const res=await fetch(url);const txt=await res.text();
    const doc=new DOMParser().parseFromString(txt,'text/html');
    const novo=doc.querySelector('main');
    const atual=qs('main');
    if(novo&&atual){atual.innerHTML=novo.innerHTML;
      document.title=doc.title;
      if(window.FormValidation)window.FormValidation.init();
    }
    if(push)history.pushState({url},'',url);
  }
  document.body.addEventListener('click',e=>{
    const a=e.target.closest('a');
    if(!a)return;const h=a.getAttribute('href');
    if(h&&h.endsWith('.html')){e.preventDefault();carregar(h,true);}
  });
  window.addEventListener('popstate',e=>{
    if(e.state&&e.state.url)carregar(e.state.url,false);
  });
  if(window.FormValidation)window.FormValidation.init();
});
