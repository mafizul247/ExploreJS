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

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.treatDay(900, 100);
// console.log(remaining);

const dola = student.treatDay(500);
// console.log(dola);