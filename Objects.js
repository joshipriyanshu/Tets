// objects in JS
// Arrays values are accessed by indecx, however in objects it is accessed by properties

var dog = {

    "name" : "lucy",
    "legs" : 4,
    "Tail" : 1,
    "friends": ["everything"]
}

var a = dog.legs   // Accessing the value

var b = dog["Tail"]

console.log(a)
console.log(b)

// updating properties in objects

dog.name = "Fennny"

console.log(dog.name)

// adding new property

dog.bark = "Bow bow";
dog.color = "white"; 

console.log(dog)

delete dog.color; // delete keyword is used to delte properties

console.log(dog)

function checkobj(val3) {
if (dog.hasOwnProperty(val3)){
    return dog[val3];
} else {
    return "Not found"
}

}

console.log(checkobj("bark"))


// Accessing nested objects 

var mystorage =  {

    "car" : {
        
        "inside" : {
            "glovebox" : "paper" ,
            "seats": "passangers"
        },
        
        "outside" : {
            "hood" : "spare tyre"
        }


    }

}


console.log(mystorage.car.inside.glovebox)
// or we can use 
console.log(mystorage.car.inside["glovebox"])