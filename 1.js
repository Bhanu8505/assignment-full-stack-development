
let sum=0;
for(let i=0;i<101;i++)
    sum+=i;
console.log(sum);

let s1=0,s2=0;
let arr=[];
for(let i=0;i<101;i++){
    if(i%2==0)
        s1+=i;
    else
    s2+=i;
}
arr.push(s1,s2);
console.log(arr);

let len=Math.floor(Math.random()*10);
let id="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let f_id="";
for(let i=0;i<len;i++){
    let r_num=Math.floor(Math.random()*id.length);
    f_id+=id.substring(r_num,r_num+1);
    console.log(f_id);
}
console.log(f_id);

let countries=['India','Nepal','USA','Russia','Canada','Israel','Bhutan','Japan','Poland','Greenland']
let arr2=[];
let count=0;
for(let i=0;i<countries.length;i++){
    if(countries[i].includes("and")){
        arr2.push(countries[i]);
        count++;
    }
}
    if(count==0)
        console.log("All these countries are without 'and'");
    else if(count!=0)
        console.log(arr2);

fr=['banana', 'orange', 'mango', 'lemon'];
    fr1=[];
for(let i=0;i<fr.length;i++)
    fr1.unshift(fr[i]);
console.log(fr);
console.log(fr1);

let capitalizeArray=function(...r){
    let temp=[];
    let t='';
    for(let i=0;i<r.length;i++){
        t=r[i];
        temp.push(t.toUpperCase());
    }
    return temp;
}

let s=['banana', 'orange', 'mango', 'lemon'];
let S=capitalizeArray(...s);
console.log(S);

let sumOfArrayItems=function(...t){
    let ts=0;
    for(const x of t){
        if(isNaN(x))
            return"Enter appropriate item";
        else
            ts+=x;
    }
    return ts;
}
let a=[1,2,3,'a',5];
let sum1=sumOfArrayItems(...a);
console.log(sum1);


let modifyArray= function(...arr){
    if(arr.length<5)
        return 'Item not found';
    else{
        arr[4]=10;
    }
    return arr;
}
let array=[1,2,3]
let res=modifyArray(...array);
console.log(res);

let sameType=function(...arr1){
    let count=1;
    for(let i=1;i<arr1.length;i++){
        if(typeof(arr1[i])==typeof(arr1[0]))
            count++;
    }
    if(count==arr1.length)
        return"Elements are of same type"
    else 
        return("Elements are not of same type");
}

let corr=[1,2,3,4,5,'a'];
let r=sameType(...corr);
console.log(r)


let isValidVariable=function(vari){
    let x=vari.split('');
        if(!(x[0]>='a'&& x[0]<='z' || x[0]>='A'&& x[0]<='Z'))
            return "Invalid Variable name";
        for(let i=1;i<vari.length;i++){
            if(!(x[i]>='a'&& x[i]<='z' || x[i]>='A'&& x[i]<='Z' || x[i]>=0 && x[i]<=9 || x[i]=='_' || x[i]=='$'))
            return "Invalid Variable name";
        }
        return "Valid Variable name";
}
let rs=isValidVariable('');
console.log(rs);
