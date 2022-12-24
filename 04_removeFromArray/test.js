let arr = [1, 2, 3, 4]
let arg = 1

for(let i = 0; i < arr.length; i++) {
    let x = arr.shift();
    if(x == arg) {
        continue;
    }
    else {
        arr.push(x);
    }
}

console.log(arr);
