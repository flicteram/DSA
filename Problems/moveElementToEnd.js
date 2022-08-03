// Move the given element/s to the end of the array;
// O(n) - Time complexity
// O(1) - Space complexity
let array = [2, 1, 2, 2, 2, 3, 4, 2]


function moveElementToEnd(array, element) {

    let i = 0;
    let j = array.length - 1

    while (i < j) {
        if (array[j] === element) {
            j--
        }
        else if (array[i] === element && array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++
        } else {
            i++
        }
    }
    return array
}


console.log(moveElementToEnd(array, 2))