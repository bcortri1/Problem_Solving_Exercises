
function isSubsequence(str1, str2) {
    if (!str1) {
        return true;
    }
    if (str1.length > str2.length) {
        return false;
    }

    let idx1 = 0;
    let idx2 = 0;

    while (idx2 < str2.length) {
        if (str1[idx1] === str2[idx2]) {
            idx1++;
            if (idx1 === str1.length) {
                return true;
            }
        }
        idx2++;
    }
    return false;
}

module.exports = isSubsequence;