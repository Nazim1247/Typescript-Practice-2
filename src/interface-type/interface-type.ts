interface IUser {
    id: number;
    name: string;
    age: number;
}

let users: IUser[]=[];
// let users: {
//     id: number;
//     name: string;
//     age: number;
// }[]=[];

let user1: IUser = {
    id: 1,
    name: 'Nazim',
    age: 25
}
// let user1: {
//     id: number;
//     name: string;
//     age: number;
// } = {
//     id: 1,
//     name: 'Nazim',
//     age: 25
// }

let user2: IUser = {
    id: 2,
    name: 'Uddin',
    age: 26
}
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

const printUserInfo = (user: IUser)=>{
    console.log(user.id, user.name, user.age);
}
// const printUserInfo = (user: {id: number, name: string, age: number})=>{
//     console.log(user.id, user.name, user.age);
// }

users.forEach((user) => printUserInfo(user));