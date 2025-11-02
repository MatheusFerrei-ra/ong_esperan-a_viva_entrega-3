(function(){
  function qs(s, r=document){ return r.querySelector(s); }
  function showError(f,m){ removeError(f); const d=document.createElement('div');d.className='field-error';d.style.color='#b91c1c';d.style.fontSize='0.85rem';d.textContent=m;f.insertAdjacentElement('afterend',d); }
  function removeError(f){ const n=f.nextElementSibling;if(n&&n.classList.contains('field-error'))n.remove(); }
  function cpfValido(str){const s=str.replace(/\D/g,'');if(s.length!==11||/^(\d)\1+$/.test(s))return false;let r;for(let j=9;j<11;j++){let sm=0;for(let i=0;i<j;i++)sm+=parseInt(s[i])*(j+1-i);r=(sm*10)%11;if(r===10)r=0;if(r!=parseInt(s[j]))return false;}return true;}
  function emailValido(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);}
  function telValido(t){const s=t.replace(/\D/g,'');return s.length>=10&&s.length<=11;}
  function cepValido(c){return /^\d{5}-\d{3}$/.test(c);}
  function validar(form){
    let ok=true;
    const n=(id)=>qs('#'+id,form);
    const campos=[['nome',v=>v.trim().length>2,'Nome inválido'],['email',emailValido,'E-mail inválido'],['cpf',cpfValido,'CPF inválido'],['telefone',telValido,'Telefone inválido'],['cep',cepValido,'CEP inválido'],['endereco',v=>v.trim().length>4,'Endereço inválido'],['cidade',v=>v.trim().length>1,'Cidade inválida'],['estado',v=>v.trim()!=='','Estado obrigatório']];
    campos.forEach(([id,fn,msg])=>{
      const f=n(id); removeError(f);
      if(!f||!fn(f.value)){showError(f,msg);ok=false;}
    });
    return ok;
  }
  function bind(form){
    form.addEventListener('submit',ev=>{
      ev.preventDefault();
      if(!validar(form)) return;
      const d={nome:qs('#nome',form).value,email:qs('#email',form).value,cpf:qs('#cpf',form).value,telefone:qs('#telefone',form).value,dataNasc:qs('#dataNasc',form).value,cep:qs('#cep',form).value,endereco:qs('#endereco',form).value,cidade:qs('#cidade',form).value,estado:qs('#estado',form).value};
      Storage.saveRegistration(d);
      alert('Cadastro salvo!');
      form.reset();
    });
  }
  window.FormValidation={init:()=>{const f=qs('#formCadastro');if(f)bind(f);}};
})();
