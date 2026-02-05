let age = 18 ;

let hasId = true ;

if(age >= 18 && hasId){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}

let isLoggedIn = false ;

let isGuest = true ;

if (isLoggedIn || isGuest){
    console.log("Access granted");
}else{
 console.log("Not Access ");
}

let isLoggedIns = false ;

if(! isLoggedIns){
    console.log("Please login");
}