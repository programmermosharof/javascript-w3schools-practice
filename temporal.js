// const today = new date();

// console.log(today);

const today = new Date(); 

console.log(today.toDateString()); 

const birthday = new Date("2005-01-06");
console.log(birthday.toDateString());

const todays = new Date();
const offerEnd = new Date(todays);

offerEnd.setDate(offerEnd.getDate() + 7);
console.log(offerEnd.toDateString());

const d = new Date();
d.setTime(d.getTime() + 5);
console.log(d.toDateString());