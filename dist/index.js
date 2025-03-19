"use strict";
// console.log('Hello I am index.ts');
// const display = (massage: string)=>{
//     let x: number = 25;
//     console.log('Hello I am index.ts');
// }
// display();
const userForm = document.querySelector('.user-form');
// console.log(userForm);
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userFeedback = document.querySelector('#feedback');
// console.log(userName);
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
