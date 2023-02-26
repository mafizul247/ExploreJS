// const first = {a: 5};
// const second = {a: 5};
// const third = second;
// if (third === second) {
//     console.log('They are same');
// } else {
//     console.log('They are not same');
// }

const first = {a: 5, b: 3, c:5};
const second = {a: 5, c: 5, b:3};
const third = second;
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('same');
// }else{
//     console.log('not same');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return 'They are same'
        for(const key of firstKeys){
            // console.log(key);
            if(first[key] === second[key]){
                return false;
            }
        }
        return true;
    }else{
        // return 'They are not same'
    }
}

const compare = compareObject(first, second); 
// const compare1 = compareObject(firstString, secondString);
console.log(compare);
// console.log(compare1);