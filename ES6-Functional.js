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
