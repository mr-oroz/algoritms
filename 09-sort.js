const user = [
    {name: "Asan", age: 22},
    {name: "Uson", age: 23},
    {name: "Aziz", age: 24},
    {name: "Abi", age: 25},
    {name: "Nuru", age: 26},
    {name: "Asein", age: 27},
    {name: "Beka", age: 22},
    {name: "Oroz", age: 29}
]

user.sort((item,itemSecond)=>{
    if (item.age > itemSecond.age) {
        return 1
    } else if (item.age < itemSecond.age){
        return -1
    }
    else {
        return 0
    }
})

console.log(user)