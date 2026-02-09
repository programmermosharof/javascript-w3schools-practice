function priceDiscount (price, discount){

}
function check (age){
    if (age < 18){
        return "Not Allowed";
    }else{
        return " Allowed";
    }
}
console.log(check(20));


function multy(a, b, c){
return a * b * c;

}
console.log(multy(1, 2, 3));

function square(n){
    return n*n;
}
console.log(square(4));


const add = function(a , b){
    return a / b;
}
console.log(add(10, 3).toFixed(0));


const multiply = function(a, b){
    return a * b;
}
console.log(multiply(10, 2));

const num = (a, b) =>{
    return a + b;
};
console.log(num(10, 30));


const name = (age) => {
    if(age >= 24 ){
        return "You are Adult";
    }else{

        return "you are not adult"

    }
};

console.log(name(24));

const squares = (number, num) => number + num;

console.log(squares(50, 50));

