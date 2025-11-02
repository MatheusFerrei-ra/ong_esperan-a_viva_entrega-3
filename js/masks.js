document.addEventListener('DOMContentLoaded', function () {
  function maskCpf(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }
  function maskTel(v){
    v = v.replace(/\D/g,'');
    if(v.length > 10){
      v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3');
    } else {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3');
    }
    return v;
  }
  function maskCep(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }
  var cpf=document.getElementById('cpf');
  var tel=document.getElementById('telefone');
  var cep=document.getElementById('cep');
  if(cpf){cpf.addEventListener('input',function(){this.value=maskCpf(this.value)})}
  if(tel){tel.addEventListener('input',function(){this.value=maskTel(this.value)})}
  if(cep){cep.addEventListener('input',function(){this.value=maskCep(this.value)})}
});
