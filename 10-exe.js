const readline = require("readline");
const users = [
    {id: 1, name: 'Asan', age: 22},
    {id: 2, name: 'Masan', age: 23},
    {id: 3, name: 'Hasan', age: 24},
    {id: 4, name: 'Tasan', age: 27},
    {id: 5, name: 'Tusan', age: 26},
    {id: 6, name: 'Lusan', age: 27},
    {id: 7, name: 'Kusan', age: 22},
    {id: 8, name: 'Lasan', age: 29}
]

const cart = [
    {user: 1, product: 1},
    {user: 1, product: 2},
    {user: 2, product: 3},
    {user: 6, product: 4},
    {user: 4, product: 5},
    {user: 3, product: 1},
    {user: 1, product: 2},
    {user: 7, product: 3},
    {user: 8, product: 4},
    {user: 8, product: 5},
    {user: 4, product: 1},
    {user: 7, product: 2},
    {user: 5, product: 3},
    {user: 6, product: 4},
    {user: 5, product: 5},
    {user: 3, product: 1},
    {user: 2, product: 2},
    {user: 3, product: 3},
]

const product = [
    {id: 1, title: 'apple'},
    {id: 2, title: 'banana'},
    {id: 3, title: 'tomato'},
    {id: 4, title: 'patties'},
    {id: 5, title: 'watermelon'},
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("What is your name ? ", function(name) {

    const user = users.find((item) =>{
        return item.name === name
    })

    const add = cart.filter((item)=>{
        return item.user === user.id
    })
    console.log(user)
    console.log(add)


    rl.close();
});



rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});