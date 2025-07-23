let timer = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timer); // stops it
let count = 0;
let interval = setInterval(() => {
  count++;
  console.log("Count:", count);
  if (count === 5) {
    clearInterval(interval); // stops after 5 times
  }
}, 1000);

let age1= prompt("enter any age");
try{
if(!Number(age1)){
  throw new  Error("age must be a  number");
}


  if(age1< 18){
    throw new Error("your not eligble to drive");
  }

  else{
    console.log("you can drive ") ;

}}
catch (error){
console.log(error.message);
}

finally{
  console.log("check completed");
}