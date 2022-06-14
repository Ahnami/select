let student=new Object();
student.name="mario";
student.age=22;
console.log(student);

//object literal
let person={
    name: "Andy",
    age: 32,
    address:{
        no:1,
        street:"hello",
        city:"Yangon"
    },
    hobbies:[
        "cooking","gaming"
    ]
}
console.log(person);
console.log(person.address.street);
console.log(person.hobbies[1]);
