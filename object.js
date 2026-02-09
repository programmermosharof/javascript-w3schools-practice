const student = {
    name: "Mosharof",
    studentID: 440,
    house: "Dhaka",
    isSingle: true,
    myFriend: ["Jihad", "Robin", "Amanollha", "Ibrahim"]
}

console.log(student);


const number = [10, 50, 5,76, 87, 90, 34];

// for(let i = 0 ; i < number.length; i++){
//     const num = number[i];
//     console.log(num);
// }
for(const num of number){
    console.log(num);
}

const products = [
    {id:1 , name: 'Vivo Phone', price: 1200},
    {id:2 , name: 'Oppo phone', price: 1200},
    {id:3 , name: 'Redmi phone', price: 1200},
    {id:4 , name: 'Samsung Phone', price: 1200},
    {id:5 , name: 'Thecno Phone', price: 1200},
    {id:6 , name: 'Itele Bikari', price: 1200},
    {id:7 , name: 'Nokiya Mobile', price: 1200},
];
// for (const product of products){
//     console.log(product);
// }
function matchedProducts(products, find){
    const matched = [];
    for(const product of products){
        if(product.name.includes(find)){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchedProducts(products, "Phone")
console.log(result);

// user input data

const users = {
    name:"Mosharof",
    age : 20,
    email: 'mosharof.dev@gmail.com',

}

const produc = {
    name: "Islamic Book",
    price: 450,
    inStooK: true,
}

function getUserName(obg){

    return obg.name;
   
}
const use = {
isLoggedin: true,
}

function loggedin(obg){

if(obg.isLoggedin){
    return"Tomake Sagotom";
}else{
    return "Please login";
}

}
console.log(loggedin(use));



const  userInfo = {
    name: "Mosharof",
    isLoggedin:true ,
    checkLogin: function (){
       
        if(this.isLoggedin){
            return "Welcome "  + this.name;
        }else{
            return "Please login";
        }

    }

}
console.log(userInfo.checkLogin());
const car = {
    brand: 'BMW',
    speed: 260,
}
console.log(car.speed);

const user = {
    name: "Mosharof",
    isLoggedin: true,
    checkLogin: function(){
        if(this.isLoggedin){
          return "Welcome  " + this.name;

        }else{
          return "Please login"
        }

    }
}
console.log(user.checkLogin());

const product = {
    name: "vivo Phone",
    price: 1600,
    discount:10,
product: function (){

    const discountAmount = this.price * this.discount / 100;

    const finalPrice = this.price - discountAmount;

    return finalPrice;

}
    
}
console.log(product.product());