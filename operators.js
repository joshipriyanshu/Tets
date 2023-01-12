
// Logical AND and OR operator




function testlogic(val) {
    if (val<= 50 && val >=25  ) { // && used for AND operator
    return "yes"
    }
    return "NO"
}
 var a = testlogic(10)

 var b = testlogic(29)

console.log(a)
console.log(b)


// OR operator

function logicor(value) {
     if (value < 20 || value >40 ) {
        return "value is True"
     }
     return "value is false"
}

var c = logicor(30)
var d = logicor(10)

console.log(c)
console.log(d)


// else and if else 

function check(int) {
    if (int<20){
        return " less than 20 "
    } else if (int > 30) {
        return " greater than 30 "
    } else {
        return " between 20 and 30"
    }

}

var outval = check (12)
var val2 = check (25)
var val3= check (47)

console.log(outval)
console.log(val2)
console.log(val3)