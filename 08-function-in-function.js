const func = (a) =>(b) => {
    return a*b
}

const times = func(5)

console.log(times(3))

const func2 = () => () => {
    return 'hello'
}

console.log(func2()())