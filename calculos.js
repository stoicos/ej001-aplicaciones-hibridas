const addition = () => {}

const division = () => {}

function theHighest(arr) {
    let highest = 0
    arr.forEach(number => {
        if (number >= highest) { highest = number };
    });    
    return highest
}

console.log(theHighest([1, 2, 1, 3, 4, 5, 1]))