// funtion for run and slang in crricket

var Slang =["Out","Single", "2 Runs", " Four", " Sixer ", "Half century", "Century"]

function cricslang(run) {
    if (run == 0){
        return Slang[0];
    } else if ( run == 1){
        return Slang[1];
    } else if (run == 2) {
        return Slang[2];
    } else if (run == 4){
        return Slang[3];
    } else if (run == 6){
        return Slang[4];
    } else if (run == 50){
        return Slang[5];
    } 
    else if ( run == 100) {

        return Slang[6];
    } 
        
    
 }
// console.log(cricslang(0))
// console.log(cricslang(1))
// console.log(cricslang(2))
// console.log(cricslang(4)) 
// console.log(cricslang(6))
// console.log(cricslang(50))
// console.log(cricslang(100))


// console.log(cricslang(0))




// Function to calcuate Batting strike rate 

function strikerate (run , ball) {
    var avg =  (run / ball)*100 ;
    return avg

}

console.log(strikerate(126, 50 ))
