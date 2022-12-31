// declaring a function

function firstfunction() {
    console.log("hello , world");
    console.log("this is my first function")


}

firstfunction()

// using arguments in a function


function seconfun(a, b) {
    console.log(a+b);


}

seconfun(10,5)


// Scope of a variable


var Myglobal = 10;

function fun() {

        oopsfun = 5 ; // without using var keyword function variable become glpoba;

    
}

function fun2(){

    var output = "";

    if (typeof Myglobal != "undefined") {
        output += "myglobal" + Myglobal;

    }

    if (typeof oopsfun != "undefined") {

        output += "oopsglobal" + oopsfun;

    
    }
    console.log(output)

}


fun()
fun2()


// in case of global and local variable have same name , then local variable has precedence 


function useret(num){
     
    return num -7 ;

}

console.log(useret(10))