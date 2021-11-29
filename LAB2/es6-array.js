const cars = ["Toyota","Honda","Mazda"];
const fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
const rname = new Array("win","John","James");
console.log(fruits);

const carPop = cars.pop();
console.log(carPop);
console.log(cars);

cars.push("Kubota");
console.log(cars);

const carshift = cars.shift();
console.log (carshift);
console.log (cars);

cars.unshift("Mazda");
console.log(cars);

const slideArr = cars.slice(0,2);
console.log(slideArr);
