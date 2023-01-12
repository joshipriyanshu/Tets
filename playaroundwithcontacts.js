var Contacts = [

    
     {
        "firstname": "John",
        "lastname" : "Reagan",
        "cityname " : "New york",
        "likes" : ["apple", "pizza", "burger"]
     },

     { 
        "firstname ": "Alisha",
        "lastname" : "mayer",
        "cityname " : "los anglease",
        "likes" : ["hotdog", "coke", "burger"]



     },


     { "firstname ": "Jacob",
     "lastname" : "brian",
     "cityname " : "lasv vegas",
     "likes" : ["applepie", "truffle", "tacos"]



     }

     



]


function lookupprorp(names, propr) {

    for (var i =0; i < Contacts.length; i ++ ) {
        if ( Contacts[i]["firstname"] === names) {
            return Contacts[i][propr]|| "No such property found"
        }
    }

    return "No such contact found"
}

var contactlookup = lookupprorp("John", "lastname")

console.log(contactlookup)