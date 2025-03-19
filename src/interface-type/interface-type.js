var users = [];
// let users: {
//     id: number;
//     name: string;
//     age: number;
// }[]=[];
var user1 = {
    id: 1,
    name: 'Nazim',
    age: 25
};
// let user1: {
//     id: number;
//     name: string;
//     age: number;
// } = {
//     id: 1,
//     name: 'Nazim',
//     age: 25
// }
var user2 = {
    id: 2,
    name: 'Uddin',
    age: 26
};
// let user2: {
//     id: number;
//     name: string;
//     age: number;
// } = {
//     id: 2,
//     name: 'Uddin',
//     age: 26
// }
users.push(user1);
users.push(user2);
// console.log(users);
var printUserInfo = function (user) {
    console.log(user.id, user.name, user.age);
};
// const printUserInfo = (user: {id: number, name: string, age: number})=>{
//     console.log(user.id, user.name, user.age);
// }
users.forEach(function (user) { return printUserInfo(user); });
