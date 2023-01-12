
// if loop 


function checktime(x) {
     if (x == 2) {

        return "it's 2am";

     }
     return "sorry";


}

console.log(checktime(2));



// double equal is equality operator , but triple equal is strict equa;ity operator which means it will chekc the data type also
// != and !== represents not equaityl operators

function checktime(y) {
   if (y != 2) {

      return "it worked";

   }
   return "didn't worked";


}

console.log(checktime(3));



// other operators


function greaterthan(val) {
    
   if(val > 99) {
      return "it's a three digit num";
   }
   return "it's not three digit num"
}

var gval = greaterthan(100);

console.log(gval);

// new


function greaterorequal(val2) {
    
   if(val2 >= 10) {
      return "ten or more ";
   }
   return "iless than 10"
}

var abc = greaterorequal(12);

console.log(abc);

// less then or 

function lessorequal(val3) {
    
   if(val3 <= 10) {
      return "ten or less ";
   }
   return "more  than 10"
}


var bcd= lessorequal(10);

console.log(bcd)
