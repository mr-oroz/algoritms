const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.on('line',word1=> {
    readLine.on('line',word2=> {

        const a1 = word1.split('');
        const a2 = a1.sort().join();

        const b1 = word2.split('');
        const b2 = b1.sort().join();

        if(a2 === b2) {
            console.log('true')
        }else {
            console.log('false')
        }
        readLine.close()
    })
});