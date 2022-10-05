let isType = function(type) {
  return function(obj) {
    return toString.call(obj) == `[object ${type}]`
  };
};
let isString = isType('String');
let isFunction = isType('Function');
console.log(isString('hello'));
console.log(isString(function() { console.log('hello'); }));
console.log(isFunction(function() { console.log('hello'); }));
console.log(isFunction('hello'));