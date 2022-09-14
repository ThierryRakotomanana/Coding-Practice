function processData(input) {
    const VALUE = ['1', '2', '3', '4','5', '6', '7', '8','9', '0']
    const DECAL = ['0', '1', '2', '3', '4','5', '6', '7', '8','9']
    input = input.split('\n')
    let length = input[0], value = [], test = "", contain = [], number = '', decalage = false;
    input.shift()
    for (let k = 0; k <  length ; k++) {
        value = input[k].split(' ')
        number = value[value.length-1].split('').reverse()
        value.pop()
        let valueLength = number.length
        for (let i = 0; i <  valueLength ; i++) {
            if( i == 0 || decalage == true){
                decalage = parseInt(number[i] ) == 0 ? true : false
                if(parseInt(number[i]) == 1 && i== valueLength -1){
                    test = test;
                }else{
                    test+= value[ parseInt(number[i]) == 0 ? value.length - 1 : parseInt(VALUE.indexOf(number[i]))]
                }   
            }else {
                decalage = false
                test+= value[parseInt(DECAL.indexOf(number[i]))]
            }
        
        }
        console.log(parseInt(test.split('').reverse().join("")));
        test = "";
    }
}
let input = "3\n0 1 2 3 4 5 6 7 8 9 3000\n5 1 6 4 0 7 8 2 9 3 150\n3 6 0 5 2 4 1 9 7 8 100"
processData(input)