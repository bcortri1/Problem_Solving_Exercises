
function constructNote(message, letters) {
    const freqMessage = {};
    const freqLetters = {};
    if (message.length > letters.length) {
        return false
    }
    for (let char of message) {
        freqMessage[char] = (1 + freqMessage[char]) || 1;
    }
    for (let char of letters) {
        freqLetters[char] = (1 + freqLetters[char]) || 1;
    }
    for (let key in freqMessage) {
        if (freqMessage[key] > freqLetters[key]) {
            return false;
        }
    }
    return true
}

module.exports = constructNote;