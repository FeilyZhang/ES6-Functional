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
