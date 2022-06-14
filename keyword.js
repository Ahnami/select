 // let=> no redeclare, allow reassign
 let name;
 name="Andy";
 console.log(name);
 //let name; 
 name="Alice";
 console.log(name);
 // var=> allow redeclare, allow reassign
 var age;
 age=12;
 console.log(age);
 var age;
 age=33;
 console.log(age);
 //const => no redeclae, ni reassign
 const y=10;
 console.log(y);
 //y=5;
 //console.log(y);
 //const y=5;