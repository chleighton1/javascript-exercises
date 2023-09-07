const palindromes = function (word) {
    let array = word.split("")
    l = 0;
    r = array.length -1;

    while (l < r) {
        if (!isAlphaNumeric(array[l])) {
            l++;
        }
        else if (!isAlphaNumeric(array[r])) {
            r--;
        }
        else if (array[l].toLowerCase() != array[r].toLowerCase()) {
            return false
        }
        else {
            l++;
            r--;
        }
    }

    return true 
};

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

// Do not edit below this line
module.exports = palindromes;
