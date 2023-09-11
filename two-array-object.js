
function twoArrayObject(keys, values) {
    const newObj = {};
    let idx = 0
    for (let key of keys) {
        newObj[key] = values[idx] || null;
        idx++;
    }
    return newObj;
}
module.exports = twoArrayObject;
