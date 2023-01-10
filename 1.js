const shoppingCart=['Milk','Coffee','Tea','Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4,1);
shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);


let webTechs=['apple','banana'];
    if(webTechs.includes('Sass'))
        console.log("Sass is a CSS preprocess");
    else
        webTechs.push('Sass');
console.log(webTechs);




const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,]
ages.sort();
console.log(ages[0]);
console.log(ages[ages.length-1]);
console.log(ages);
if(ages.length%2==0){
    let m=((ages.length)/2);
    console.log((ages[m-1]+ages[m])/2);
}
else{
    let m1=Math.floor(ages.length/2);
    console.log(ages[m1]);
}
    let sum=0;
for (let i in ages) {
    sum=sum+ages[i];
}
let avg=sum/ages.length
console.log(avg);

console.log(`Range is : ${ ages[ages.length-1]-ages[0]}`);

let min=ages[0];
let max=ages[ages.length-1];

let avg_min=Math.abs(min-avg);
let avg_max=Math.abs(max-avg);
    if(avg_max>avg_min)
        console.log("avg_max is greater");
    else{
        console.log("avg_min is greater");
    }



    let arrS=[ 'Facebook ,', 'Google ,', 'Microsoft ,', 'Apple ,', 'IBM ,','Oracle', 'and','Amazon','are','big' ,'IT','companies.']
    console.log(arrS.join(" "));

    for(let i in arrS)
    console.log(arrS[i].toUpperCase());

    let len=Math.floor(Math.random()*10);
    let id="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let f_id="";
    for(let i=0;i<len;i++){
        let r_num=Math.floor(Math.random()*id.length);
        f_id+=id.substring(r_num,r_num+1);
        console.log(f_id);
    }
    console.log(f_id);

fr=['banana', 'orange', 'mango', 'lemon'];
fr1=[];
for(let i=0;i<fr.length;i++)
    fr1.unshift(fr[i]);
console.log(fr);
console.log(fr1);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
// "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let itr=["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"];
for(itr1 of itr)
console.log(itr1);