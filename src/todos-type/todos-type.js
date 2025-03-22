// string[] | string |number | boolean | object
function printTodos(userId, age) {
    // if(typeof todos === 'object'){
    //     todos.map(todo => console.log(todo))
    // }else if(typeof todos === 'string'){
    //     console.log(todos);
    // }
    console.log(userId, age);
}
// const todos = ['todo1', 'todo2'];
// printTodos(todos);
printTodos('101', 25);
printTodos(102, 25);
printTodos(true, 25);
printTodos({ id: 103 }, { age: 25 });
