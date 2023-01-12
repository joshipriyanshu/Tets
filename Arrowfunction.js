// below function is anonymos function, and anonymos functions can be changed to arrow functions.

var  magic =function(){  //this is a anonyoms function
    return new Date()
}

console.log(magic)
// another short way to write such function

const magic1 = () => new Date()

console.log(magic1)

//arrow function with parameteres

var Arrowfun = (var1, var2) => var1.Concat(var2);

console.log(Arrowfun([1,2],[3,4]))