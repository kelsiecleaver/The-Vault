'use strict';
module.exports = function() {
var lock = {};
  function setValue(key, value){
    lock[key] = value;
    return key;
  }
  function getValue(key){
  if(lock.hasOwnProperty(key)){
  return lock[key];
}else{
  return null;
}
}
return {
  setValue: setValue,
  getValue: getValue
};
}