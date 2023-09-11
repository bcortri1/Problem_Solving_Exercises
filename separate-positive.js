
function separatePositive(nArr) {
    let left = 0;
    let right = nArr.length - 1;

    while (left < right) {
        if ((nArr[left] < 0) && (nArr[right] > 0)) {
            let swap = nArr[left];
            nArr[left] = nArr[right];
            nArr[right] = swap;
            left++;
            right--;
        }
        else {
            if (nArr[left] > 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return nArr;
}

module.exports = separatePositive;