let arrayExample=[1,2,3,4,5,3];
let newArray= arrayExample.concat([6,7,8,9]);
console.log(newArray);
let iterators=arrayExample.entries();
for( let [index,value] of iterators){
  console.log(index,value);
}
let output=arrayExample.every( num => num>4);
console.log(output);
let newFilter=arrayExample.filter(num => num<4);
console.log(newFilter);
let newFind=arrayExample.find(num => num>3);
console.log(newFind);
console.log(arrayExample.findIndex(num => num>2));
let numbers=[1,2,3,4,5];
  let sum1=0;
numbers.forEach(element =>{

  sum1 += element;
});
console.log(sum1);
function testarray(value){
  Array.isArray(value)? console.log("it is array") : console.log("it is not array");
}
testarray([1,2,3]);
testarray(13);
let keys=arrayExample.keys();
for( let value of keys){
  console.log(value);
}
console.log(arrayExample.lastIndexOf(3));
console.log(numbers.reduce((product,num) =>product* num,1));

