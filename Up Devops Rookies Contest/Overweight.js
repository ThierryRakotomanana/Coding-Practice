function processData(input) {
    input = input.trim().split('\n')
    let length = parseInt(input[0]), value = [], test = 0, number = [], choice;
    input.shift()
    for (let i = 0; i <  length ; i++) {
        number = input[2*i].trim().split(" ")
        value = input[2*i+1].trim().split(' ').sort((a, b) => parseInt(a) - parseInt(b))
        choice = 0
        test = 0;
        for (let k = 0; k < parseInt(value.length) ; k++) {
            if(test + parseInt(value[k]) < parseInt(number[0])){
                choice++
                test+=parseInt(value[k])
            }else{
                break
            }
        }
        console.log(choice);
    }
}

let input = "3\n10 5\n2 5 3 4 6\n100 7\n10 11 10 22 15 35 25\n55 8\n55 5 30 30 70 15 21 33"
let final = processData(input)
