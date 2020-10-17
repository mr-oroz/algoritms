const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.on('line',number=> {
    let res = true
    for (let i = 2; i<+number; i++) {
        if(+number%i===0){
            res = false
            break;
        }
    }
    console.log(res)
    readLine.close()
})