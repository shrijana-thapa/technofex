let students={
  name:'shr',
  age:12
}
let newObject=Object.create(students);
console.log(newObject.name);
newObject.degree='bca';
console.log(newObject.degree);

const animal = {
  type: "mammal"
};

const dog = Object.create(animal);
dog.name = "Bobby";

console.log(Object.hasOwn(dog, "name"));
console.log(Object.hasOwn(dog, "type"));
 const date= new Date();
 console.log(date.getFullYear());
 console.log(date.getMinutes());
 console.log(date);
  console.log(date.getDate());
  console.log(date.getDay());
    console.log(Date.now());
    console.log( new Date().getUTCDate());
    date.setFullYear(2030);
    console.log(date.getFullYear());

    