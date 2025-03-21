interface IUserFormatter {
    formatUser : ()=> string
}

class User {
    constructor(private fullName: string, private age: number) {}

    formatUser = ()=> {
        return `name : ${this.fullName}, age: ${this.age}`
    }
}

let user = new User('Nazim', 25);
console.log(user.formatUser());