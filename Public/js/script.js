let text = "This is text from script.";

const button = document.querySelector(".container>button");

button.addEventListener("click", function() {
    error.show("test");
    console.log(error.variable);
});

console.log('%c hello', 'color: pink')

var fiat500 = {type:"Fiat", model:"500", color:"white"};
var audiA3 = {type:"Audi", model:"A3", color:"blue"};
var tesla = {type:"Tesla", model:"S", color:"black"};

let cars = [fiat500, audiA3, tesla];
console.log(cars);
console.table(cars);

const name = 'Adrian'
const greetings = 'Hello' + name;

['JavaScript', 'CSS', 'HTML'].forEach((skill) => console.log(skill))


function printCarTypes(cars) {
    for (const car of cars) {
        console.log(`${car.type} ${car.model}`);
    }
}

printCarTypes(cars);


const [first, ...others] = cars;

console.log("first car");
console.log(first);

console.log("other cars");
console.table(others);

let bmwX3 = {type:"BMW", model:"X3", color:"pink"};

cars = [bmwX3, ...cars];

console.table(cars);
