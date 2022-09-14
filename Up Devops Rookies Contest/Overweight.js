function processData(input) {
    input = input.split('\n')
    let length = input[0], value = [], test = 0, number = [], choice = 0;
    input.shift()
    for (let i = 0; i <  length ; i++) {
        number = input[2*i].split(' ')
        value = input[2*i+1].split(' ').sort((a, b) => a - b)
        console.log(value)
        for (let k = 0; k < number[1] ; k++) {
            if(test + parseInt(value[k]) < parseInt(number[0])){
                choice++
                test+=parseInt(value[k])
            }else{
                break
            }
        }
        console.log(choice)
        choice = 0
        test = 0;
    }
}

let input = "3\n10 5\n2 5 3 4 6\n100 7\n10 11 10 22 15 35 25\n55 8\n55 5 30 30 70 15 21 33"
console.log(processData(input))
