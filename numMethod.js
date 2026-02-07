// let a = 60.54;

// console.log(Number.parseInt(a));

// let b = "p20.60";

// console.log(Number.parseFloat(b));

// let x = 9 * 2;

// console.log(Number.isNaN(x));

function checkNumber(value) {
  if (typeof value == "number") {
    return "Invalid";
  }
  return isFinite(value);
}

checkNumber(20);        
checkNumber(Infinity);  
checkNumber("20");      



