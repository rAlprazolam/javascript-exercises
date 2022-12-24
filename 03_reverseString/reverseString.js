const reverseString = function(str) {
    let arr = Array.from(str);
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = tmp;
    }
    return arr.join("")
};

// Do not edit below this line
module.exports = reverseString;
