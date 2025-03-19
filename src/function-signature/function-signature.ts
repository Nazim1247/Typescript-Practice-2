let userInfo: ()=> void;
let userInfo1: (name: string)=> void;
let userInfo2: (name: string, age: number)=> string;

userInfo =()=>{
    console.log('nazim uddin');
}

userInfo1 =(name: string)=>{
    console.log(name);
}

userInfo2 =(name: string, age: number)=>{
    return `${name} ${age}`;
}

userInfo();
userInfo1('nazim');
console.log(userInfo2('nazim', 25));