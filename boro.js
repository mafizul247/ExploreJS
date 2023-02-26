const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculas', 'algeber', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips = 0){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = student.exam();
// console.log(result);

const badamAli = {
    name: 'kacha badam',
    money: 8000
}
const result2 = student.exam.call(badamAli);
// console.log(result2);

const badamMoney = student.treatDay.call(badamAli, 400, 50);
// console.log(badamAli);

const badamMoney2 = student.treatDay.apply(badamAli, [1000, 50]);
// console.log(badamMoney2);


const badamAliTreat = student.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);
