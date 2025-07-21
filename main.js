function testVar(){
  if(true){
    var x=5;
    var x=6;
    x=7;
    console.log(x);
  }
  console.log(x);
}

testVar();

function testLet(){
  if(true){
    let y=5;
   /* let y=6;*/
   y=7;
    console.log(y);
  }
   /* console.log(y); */
}
testLet();

function testConst(){
  if(true){
    const z=5;
   /* const z=6; */
   /*z=7; */
    console.log(z);
  }
   // console.log(z); //
}
testConst();
 let data=null;
 console.log(data);
 console.log(typeof(data));

 let id = Symbol("userID");
console.log(id);             
console.log(typeof id);       

const Id = Symbol("userId");
const user = {
  name: "Shrijana",
  age: 24,
  [Id]: 12345 
};


console.log(user.name); 
console.log(user.age); 
console.log(user[Id]);


// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  

let value2 = 900;
/*let result2= value1+ value2;
console.log(result2); */


function calculateFactorial(num) {
    let fact=1;
    for(i=1;i<=num;i++){
       fact= i * fact;
    }
    console.log(fact);
}
calculateFactorial(3);
let name = "Shrijana ana";
console.log(name.length);
console.log(name.slice(2,5));
console.log(name.indexOf("i"));
console.log(name.lastIndexOf("a"));
console.log(name.search("ana"));
console.log(name.search("ann"));
console.log(name.match("ana"));
let sentence="java is cool.javascript is awesome.JAVA";
console.log(sentence.match("java"));
console.log(sentence.match(/java/g));

console.log(sentence.match(/java/gi));
console.log(name.includes("jana"));





