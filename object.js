const player = {};
player.name = 'Smaill nirop';
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing you bat');
}
// console.log(player);
// player.bat();

const person = new Object();
// console.log(person);

const item = Object.create(null);
// console.log(item);

class Person {
    name = 'abul';
    address= 'sador gat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
// console.log(person1);

function Car(model, price){
    this.model = model;
    this.price = price
}

const tesla = new Car('elon', 32);
// console.log(tesla);