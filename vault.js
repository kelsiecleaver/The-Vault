'use strict';
module.exports = function() {
var purple = {};
  function setValue(key, value){
    purple[key] = value;
    return key;
  }
  function getValue(key){
  if(purple.hasOwnProperty(key)){
  return purple[key];
}else{
  return null;
}
}
return {
  setValue: setValue,
  getValue: getValue
};
}