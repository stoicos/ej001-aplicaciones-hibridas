const addition = (number1, number2) => number1 + number2

const division = (number1, number2) => {
    if (number2 > number1) {
        return "No es posible hacer esta división: El divisor debe ser menor que el dividendo"
    } else {
        return number1 / number2
    }
}

function theHighest(arr) {
    let highest = 0
    arr.forEach(number => {
        if (number >= highest) { highest = number };
    });    
    return highest
}

console.log(addition(1, 2))