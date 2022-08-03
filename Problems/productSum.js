// Find product sum of the array and multiply by array depth

let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

function productSum(array, multiplier = 1) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += productSum(array[i], multiplier + 1)
        }
        else {
            sum += array[i]
        }
    }
    return sum * multiplier
}


console.log(productSum(array))