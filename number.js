let sum=0.1+0.2;
console.log(sum.toFixed(3));
console.log(+sum.toFixed(3));
console.log(isNaN("flower"));
console.log(isNaN("123"));
let value="ktm";
let result=Number.value;
let finalResult=Number.isNaN(result);
if(finalResult){
  console.log(" a number");
}
else{
  console.log("not a number");
}

let value3="string";
isFinite(value3) ? console.log("a number"): console.log("not a number");
let value4= prompt("enter any value");
isFinite(value4) ? console.log("enter value is a number"): console.log("enter value is not a number");
