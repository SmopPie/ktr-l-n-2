//cau 1
function student(name,age,address){
    var student = {
    name: "Long",
    age: "15",
    address:"DaNang"
}
    return student;
}
console.log(student)
//cau 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
console.log(smartPhones.map(smartPhone => smartPhone.price));
//cau 3

//es6
const foo = (x,y,z) => console(x,y,z)
//es6
const foo2 = () => {alert("hello")}
//es6
const foo3 = (a,b) => {let m=a+b*100; return m}
//cau 4
let user = {
    name: "Minh Son",
    age:"10",
    address:"Da Lat"
}
var stringUser = JSON.stringify(user)
localStorage.setItem('user',stringUser)

