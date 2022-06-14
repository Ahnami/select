let name="Mario";
let subject=new String("Hello");

console.log(name);
console.log(subject);

let str="Hello World";
console.log(str.length);
console.log(str[4]);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.slice(2,7));
console.log(str.slice(4,7));
console.log(str.substring(2,4));
console.log(str.substring(4,2));
console.log(str.slice(2));
console.log(str.substring(2));

let str1="welcome";
console.log(str1.length);

let str2="   welcome  ";
console.log(str2.length);
console.log(str2.trim().length);

let str3="Hey, Hello";
console.log(str3.replace('l' ,'L'));
console.log(str3.replaceAll('l','L'));
console.log(str3.indexOf('o'));
console.log(str3.search('o'));
console.log(str3.lastIndexOf('H'));

// concarenation
let username="Andy";
let age=12;

let result=username+age;
console.log(result);

result="Name is "+username+" age is "+age;
console.log(result);

// template string
result=`Name is ${username} age is ${age}`;
console.log(result);

let str4="wukhong";
// console.log(str4.replace(w, 'W'));
let ans1=str4.replace(str4[0],str4[0].toUpperCase());
console.log(ans1);
let ans2=str4[0].toUpperCase()+str4.slice(1);
console.log(ans2);
