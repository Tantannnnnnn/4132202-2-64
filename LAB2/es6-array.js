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

const conCatarr = cars.concat.apply(rname);
console.log(conCatarr.toString());

//spread operator
const catarr = [...cars, ...rname];
console.log(catarr);

//iteration
const keys = cars.keys();
let Text = "";
for(x of keys){
    Text += x;
}
console.log(Text);

cars.forEach(cat);
function cat(value, index, array) {
    Text += value;
}
console.log(Text);

cars.map(addVal);
function addVal (value) {
    return value = "<br>";
}

const number = [10,20,30];
const over10 = number.filter(over10fn);
function over10fn(value) {
    return value > 10;
}
console.log(over10);

let sum = number.reduce(addFn);
function addFn(total,value){
    return total + value;
}
console.log(sum)

let boolOver10 = number.every(over10fn)
console.log(boolOver10);
boolOver10 = number.some(over10fn)
console.log(boolOver10);

let first = number.find(over10fn)
console.log(first);
let firstkey = number.findIndex(over10fn);
console.log(firstkey);

const alphaber = Array.from("ABCDEF");
console.log(alphaber);