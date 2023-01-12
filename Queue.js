
// building queue with JS

function nextinline(arr, item) {
    arr.push(item);
    return arr.shift();
    
}

var testarr= [1,2,3,4,5]

console.log("before: " + testarr );
console.log(nextinline(testarr, 6));
console.log("after: " + testarr);