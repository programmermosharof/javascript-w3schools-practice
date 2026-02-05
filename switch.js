let day = 6;


switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

        default:
            console.log("Invalid day");
}


let option = "login";
switch(option){
    case "login":
        console.log("Show login page");
        break;

case "signup":
    console.log("Show signup page");
     break;
     case "logout":
        console.log("Logging out");
        break;

        default:
            console.log("Invalid option");
}

// task 1

let number = 2;

switch(number){
    case 1:
        console.log("One");
        break;
    case 2 :
    console.log("Two");
    break;

    case 3:
        console.log("Three");
        break;

        default:
            console.log("Invalid");
    
}


let role = "admin";

switch(role){
    case "user":
        console.log("Limited access");
        break;
        case "admin":
            console.log("Full access");
            break;
            case "guest":
                console.log("Read only");
                break;

                default:
                    console.log("You are Not valid");
}