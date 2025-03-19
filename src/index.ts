// console.log('Hello I am index.ts');

// const display = (massage: string)=>{
//     let x: number = 25;
//     console.log('Hello I am index.ts');
// }
// display();

const userForm = document.querySelector('.user-form') as HTMLFormElement;
// console.log(userForm);

const userName = document.querySelector('#name') as HTMLInputElement;
const userEmail = document.querySelector('#email') as HTMLInputElement;
const userCountry = document.querySelector('#country') as HTMLSelectElement;
const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;
// console.log(userName);

userForm.addEventListener('submit', (event: Event)=>{
    event.preventDefault();
    const data ={
        username: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    }
    console.log(data);
});