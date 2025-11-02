const Storage = (function(){
  const KEY = 'ong_esperanca_registros_v1';
  function _read(){
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch(e){ return []; }
  }
  function _write(arr){ localStorage.setItem(KEY, JSON.stringify(arr)); }
  function saveRegistration(obj){
    const arr=_read();
    obj._id = Date.now();
    obj._created = new Date().toISOString();
    arr.push(obj);
    _write(arr);
    return obj;
  }
  function getRegistrations(){ return _read(); }
  function clearAll(){ localStorage.removeItem(KEY); }
  return { saveRegistration, getRegistrations, clearAll };
})();
window.Storage = Storage;
