
function sameFrequency(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    const freqNum1 = {};
    const freqNum2 = {};

    for (let num of num1) {
        freqNum1[num] = (1 + freqNum1[num]) || 1;
    }
    for (let num of num2) {
        freqNum2[num] = (1 + freqNum2[num]) || 1;
    }
    for (let key in freqNum1) {
        if (freqNum1[key] !== freqNum2[key]) {
            return false;
        }
    }
    return true
}
module.exports = sameFrequency;