function Multipluelemesnts(ourarray) {

var product = 1;

for (var i =0; i<ourarray.length; i++){
    for(var j =0; j< ourarray[i].length; j++){
        product *= ourarray[i][j];
    }

}
 return product
}


var product= Multipluelemesnts([[1,2], [3,4], [5,6,7]])

console.log(product)