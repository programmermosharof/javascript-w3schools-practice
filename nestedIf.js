let isLoggedIn = true;
let isAdmin = true;

if(isLoggedIn){
    if(isAdmin){
        console.log("Admin Dashboard");
    }else{
        console.log("User Dashboard");
    }
}else{
    console.log("Please Login");
}


let isLoggedIns = true;
let isAdmins = false;

if(isAdmins){
    if(isLoggedIns){
        console.log("Admin Dashboard");
    }else{
        console.log("User Dashboard");
    }
}else{
    console.log("Please Login");
}



let isPassed = false;


let marks = 90 ;

if(isPassed){
    if(marks >=  90){
        console.log("Scholarship");
    }else{
        console.log("Just Pass");
    }
}else{
    console.log("Try again");
}


let logged = true;

let user = false;

if(logged){
    if(user){
        console.log("Access granted");
    }else{
        console.log("Verify email");
    }
}else{
    console.log("Please login");
}



let numbers = 50;

if(numbers > 0){
    if(numbers % 2 === 1){
        console.log("Positive  Even");
    }else{
        console.log("Positive  Odd");
    }
}else{
    console.log("Negative Number");
}

let isOrderPlaced = false ;

let isPaymentSuccess = true; 

if(isOrderPlaced){
if(isPaymentSuccess){
     console.log("Order confirmed");
    }else{
        console.log('Payment failed');
    }
}else{
    console.log("Place order first");
}