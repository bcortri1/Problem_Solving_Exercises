
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let lArr = arr[left];
        let rArr = arr[right];
        let sum = lArr + rArr;
        if (sum === avg * 2) {
            return true;
        }
        else if (sum < avg * 2) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}

module.exports = averagePair;
