var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var getIteratorMethod = require('../internals/get-iterator-method');
var getMethod = require('../internals/get-method');
var wellKnownSymbol = require('../internals/well-known-symbol');
var AsyncFromSyncIterator = require('../internals/async-from-sync-iterator');

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');

module.exports = function from(obj) {
  var object = anObject(obj);
  var alreadyAsync = true;
  var method = getMethod(object, ASYNC_ITERATOR);
  var iterator;
  if (!isCallable(method)) {
    method = getIteratorMethod(object);
    alreadyAsync = false;
  }
  if (isCallable(method)) {
    iterator = call(method, object);
  } else {
    iterator = object;
    alreadyAsync = true;
  }
  anObject(iterator);
  return getIteratorDirect(alreadyAsync ? iterator : new AsyncFromSyncIterator(getIteratorDirect(iterator)));
};
