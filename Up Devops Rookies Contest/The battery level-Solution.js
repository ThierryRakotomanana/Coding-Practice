function processData(input) {
    input = input.split('\n')
    let length = input[0], value = [], test = 0, final = []
    input.shift()
    for (let k = 0; k <  length ; k++) {
        value = input[k].split(' ')
        while(test < parseInt(value[1])){
            test += parseInt(value[0])
        }
        if(100 <test ) test = 100
        console.log(test)
        test = 0
        final.push(test)
    }
    //return final
}

let input = "4\n20 23\n10 0\n30 95\n5 65"
processData(input)
