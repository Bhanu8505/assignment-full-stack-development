let firstName="Bhanu";
let lastName="Pundir";
let country="India";
let city="Muzaffarnagar";
let age=21;
let isMarried=false;
let year=2022;

console.log(
    `firstName is ${typeof(firstName)}
    lastName is ${typeof(lastName)}
    country is ${typeof(country)}
    city is ${typeof(city)}
    age is ${typeof(age)}
    isMarried is ${typeof(isMarried)}
    year is ${typeof(year)}
    `
)

if('0'){
    console.log("truthy value");
}
if('false'){
    console.log("truthy value");
}
if([]){
    console.log("truthy value");
}


if(0){
    console.log("falsy value");
}
if(false){
    console.log("falsy value");
}
if(''){
    console.log("falsy value");
}

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let x=10;
if(x%2==0){
    console.log('divisible by 2');
}
else{
    console.log('not divisible by 2');
}

let score=65;
if(score>=80 && score<=100)
    console.log("Grade A");
else if(score>=70 && score<=79){
    console.log("Grade B");
}
else if(score>=60 && score<=69){
    console.log("Grade C");
}
else if(score>=50 && score<=59){
    console.log("Grade D");
}
else if(score>=0 && score<=49){
    console.log("Grade F");
}

let month=1;
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    console.log("31 Days");
}
else if(month==4 || month==6 || month==9 || month==11){
    console.log("30 Days");
}
else{
    console.log("28 or 29 Days");
}

let t= new Date(2023,01,08,01,20);
console.log(t.toLocaleDateString());

let curr=10;
rup=82.23*curr;
console.log(rup);

let digit=6694;
unit=digit%10;
console.log(unit);