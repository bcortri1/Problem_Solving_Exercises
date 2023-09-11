//Requirements assume no duplicates but function can handle duplicates
function countPairs(arr, num) {
    arr = new Set(arr); // O(n)
    let count = 0;
    for (let val of arr) { // O(n - duplicates)
        arr.delete(val);// O(1)
        if (arr.has(num - val)) { // O(1)
            count++;
            arr.delete(num - val);// O(1)
        }
    }
    return count;
}

module.exports = countPairs;