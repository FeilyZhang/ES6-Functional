const every = (arr, callback) => {
    let result = true;
    for (let ele of arr) {
        result = result && callback(ele);
    }
    return result;
}

const some = (arr, callback) => {
    let result = false;
    for (let ele of arr) {
        result = result || callback(ele);
    }
    return result;
}

const forEach = (arr, callback) => {
    for (let ele of arr) {
        callback(ele);
    }
}

const map = (arr, callback) => {
    let result = new Array();
    for (let ele of arr) {
        result.push(callback(ele));
    }
    return result;
}

const filter = (arr, callback) => {
    let result = [];
    for (let ele of arr) {
        (callback(ele)) ? result.push(ele) : undefined;
    }
    return result;
}

const curry = (callback) => {
    if (typeof callback !== 'function') {
        throw Error('No function provided');
    }
    return (...args) => {
        return callback.apply(null, args);
    }
}

const reduce = (array, callback, initialValue) => {
    let accumlator;
    if (initialValue != undefined) {
        accumlator = initialValue;
    } else {
        accumlator = array[0];
    }
    if (initialValue === undefined) {
        for (let i = 1; i < array.length; i++) {
            accumlator = callback(accumlator, array[i]);
        }
    } else {
        for (const ele of array) {
            accumlator = callback(accumlator, ele);
        }
    }
    return [accumlator];
}

const compose = (...callbacks) => 
    (value) =>
        reduce(callbacks.reverse(), (acc, callback) => callback(acc), value);

const pipe = (...callbacks) => 
    (value) =>
        reduce(callbacks, (acc, callback) => callback(acc), value);

const isEmpty = (str) => {
  if (str === undefined || str === null || new String(str).trim()== '') {
    return true;
  } else {
    return false;
  }
}

const GUID = (decimal) => new Date().getTime().toString(decimal);

const isEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;
    for (let index in arr1) {
        if (arr1[index] != arr2[index]) return false;
    }
    return true;
}

const isEmail = (str) =>
    /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
