var myArray = [["ia","b","c"], ["d","e","f"], ["g","h",""]];

console.log(myArray[1][2]) // to access elements insides array of an array

var ourArray =  [["john, 23"], ["cat", 2]]

ourArray.push("addednew") // array.push to add something at end

console.log(ourArray)

ourArray.push(["new", 29]) 

console.log(ourArray)


// Pop in array

var newArray = [1 ,2, 3, 4]

newArray.pop()   //array.pop to remove last element

console.log(newArray)



// shift in array


var array = [1,2,3];

var shiftArray  = array.shift(3) // The shift() method removes the first element from an array

console.log(shiftArray)

// unshift aarray function 


var array1 = ["a", "b", "c", "d"];

var arrayn1 = array1.unshift("added");  //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(arrayn1)

console.log(array1)
