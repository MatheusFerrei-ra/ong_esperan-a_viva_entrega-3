document.addEventListener('DOMContentLoaded',function(){
  var btnHam=document.querySelector('.hamburger');
  var nav=document.querySelector('.nav');
  if(btnHam){
    btnHam.addEventListener('click',function(){
      if(nav.style.display==='flex'){nav.style.display='none'}
      else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='12px'}
    });
  }
  document.querySelectorAll('.dropdown-toggle').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var menu=this.nextElementSibling;
      if(menu.style.display==='block'){menu.style.display='none'}
      else{document.querySelectorAll('.dropdown-menu').forEach(function(m){m.style.display='none'});menu.style.display='block'}
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.dropdown')){document.querySelectorAll('.dropdown-menu').forEach(function(m){m.style.display='none'})}
  });
  var toast=document.querySelector('.toast');
  function showToast(txt,ms){
    if(!toast)return;
    toast.textContent=txt;toast.style.display='block';
    setTimeout(function(){toast.style.display='none'},ms||3000);
  }
  window.showToast=showToast;
  var modalBackdrop=document.querySelector('.modal-backdrop');
  document.querySelectorAll('[data-modal-open]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var id=btn.getAttribute('data-modal-open');
      var modal=document.getElementById(id);
      if(modal && modalBackdrop){modalBackdrop.style.display='flex';modal.style.display='block'}
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      var modal=document.querySelector('.modal'); if(modal)modal.style.display='none';
      if(modalBackdrop)modalBackdrop.style.display='none';
    });
  });
  var form=document.getElementById('formCadastro');
  if(form){
    form.addEventListener('submit',function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
        return;
      }
      e.preventDefault();
      showToast('Cadastro enviado (simulado)',3000);
      form.reset();
    });
  }
});
