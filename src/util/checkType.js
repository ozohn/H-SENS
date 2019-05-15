const isString = target => toString.call(target) === '[object String]';
const isNumber = target => toString.call(target) === '[object Number]';
const isUndefined = target => toString.call(target) === '[object Undefined]';
const isBoolean = target => toString.call(target) === '[object Boolean]';
const isObject = target => toString.call(target) === '[object Object]';
const isFunction = target => toString.call(target) === '[object Function]';
const isArray = target => toString.call(target) === '[object Array]';
const isHtmlEl = target => target instanceof HTMLElement;
const isHtmlCol = target => toString.call(target) === '[object HTMLCollection]';
const isNodeList = target => target instanceof NodeList;

export {
  isString,
  isNumber,
  isUndefined,
  isBoolean,
  isObject,
  isFunction,
  isArray,
  isHtmlEl,
  isHtmlCol,
  isNodeList,
};
