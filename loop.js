const numbers = [12, 13, 23, 32, 31];
// for(const number of numbers){
//     console.log(number);
// }
// numbers.forEach(number => {
//     console.log(number)
// })

// for(let i = 0; i < numbers.length; i++){
//     // const index = numbers[i];
//     console.log(i, numbers[i])
// }

const bottle = { color: 'yellow', price: 50, isClean: true, capacity: 1 };

const keys = Object.keys(bottle);
// console.log(keys);
for(const key of keys){
    // console.log(key);
    // console.log(bottle[key]);
    // console.log(key, bottle[key]);
}

for(const key in bottle){
    // console.log(key);
    // console.log(key, bottle[key]);
    const value = bottle[key];
    console.log(key, value);
}

const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    // console.log(key, value);
}

