const sumAll = function(a, b) {
    //Checks for negative inputs
    if(a < 0 || b < 0) return "ERROR";
    //Checks for non number inputs
    if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";

    sum = 0;
    if(a < b) {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
        console.log(sum)
        return sum;
    } 
    else {
        for(let i = b; i <= a; i++) {
            sum += i;
        }
        console.log(sum)
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
