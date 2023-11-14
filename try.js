// // ternary operator

// const user = "gs;jxs";

// switch (user) {
//     case "admin":
//         console.log("you get full access")
//         break;
//         case "subadmin":
//             console.log("you get partial access")
//             break;
//             case "user":
//                 console.log("you get full content")
//                 break;
//                 case"guestuser":
//                     console.log("you get just trials")
//                     break;
//     default:
//         console.log("Please register with us");
//         break;
// }


// function sayhello(){

//     console.log("Hello ");

// }


// sayhello()
// sayhello



var team = function (role) {
    
    switch (role) {
        case "team lead":
            return `Team will work under you`
            break;
            case "Mananger":
                return `you have to manage the team`
                break;
                case "client":
                    return `you have to tell the requirement`
                    break;
                    

        default: 
        return "Please apply"
            break;
    }

}
 console.log(team("client"));