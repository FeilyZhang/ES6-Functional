"use strict";

var every = function every(arr, callback) {
    var result = true;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ele = _step.value;

            result = result && callback(ele);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

var some = function some(arr, callback) {
    var result = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var ele = _step2.value;

            result = result || callback(ele);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return result;
};

var forEach = function forEach(arr, callback) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var ele = _step3.value;

            callback(ele);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};

var map = function map(arr, callback) {
    var result = new Array();
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = arr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var ele = _step4.value;

            result.push(callback(ele));
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return result;
};

var filter = function filter(arr, callback) {
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ele = _step.value;

            callback(ele) ? result.push(ele) : undefined;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

var curry = function curry(callback) {
    if (typeof callback !== 'function') {
        throw Error('No function provided');
    }
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return callback.apply(null, args);
    };
};

var reduce = function reduce(array, callback, initialValue) {
    var accumlator = void 0;
    if (initialValue != undefined) {
        accumlator = initialValue;
    } else {
        accumlator = array[0];
    }
    if (initialValue === undefined) {
        for (var i = 1; i < array.length; i++) {
            accumlator = callback(accumlator, array[i]);
        }
    } else {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var ele = _step.value;

                accumlator = callback(accumlator, ele);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return [accumlator];
};

var compose = function compose() {
    for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
        callbacks[_key] = arguments[_key];
    }

    return function (value) {
        return reduce(callbacks.reverse(), function (acc, callback) {
            return callback(acc);
        }, value);
    };
};

var pipe = function pipe() {
    for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
        callbacks[_key] = arguments[_key];
    }

    return function (value) {
        return reduce(callbacks, function (acc, callback) {
            return callback(acc);
        }, value);
    };
};

var isEmpty = function isEmpty(str) {
  if (str === undefined || str === null || new String(str).trim() == '') {
    return true;
  } else {
    return false;
  }
};

var GUID = function GUID(decimal) {
  return new Date().getTime().toString(decimal);
};
