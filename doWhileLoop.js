let count = 1;

do {
  console.log("Count: " + count);
  count++;
} while (count <= 5);



for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

for(let skip = 1; skip <= 10; skip++){
    if(skip === 3){
        continue;
    } else if (skip === 6){
        continue;
    }
    console.log(skip);
}