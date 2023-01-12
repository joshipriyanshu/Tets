// Switch statements

function Caseinswitch (val) {
    var answer = ""
    switch(val) {
        case 1 :
            answer ="Alpha"
            break;
        case 2 :
            answer =" Beta"
            break;
        case 3 :
            answer = "gamma"
            break;
        case 4 :
            answer = "delta"
            break;

        default :                                // Default option:- used , when something is not listed 
            answer = " Sorry not found"
            break
    }

    return answer


}
console.log(Caseinswitch("afdgh"))
console.log(Caseinswitch(3))





// returning boolean from functions

function isless(a, b) {
    return a>b;
}
 console.log(isless(15,20))