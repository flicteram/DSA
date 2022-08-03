// Find the pair of numbers from the 2 arrays with the smalles difference
// Time complexity: O(n log n)
// Space complexity: O(1)

let arr1 = [-1, 5, 10, 20, 28, 3]
let arr2 = [26, 134, 135, 15, 17]

function smallestDifference(arr1, arr2) {

    let i = 0;
    let j = 0;
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    let resp = [];
    let smallest = Infinity
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (smallest >= Math.abs(arr1[i] - arr2[j])) {
                resp = [arr1[i], arr2[j]]
                smallest = Math.abs(resp[0] - resp[1])
            }
            i++
        }
        if (arr1[i] > arr2[j]) {
            if (smallest >= Math.abs(arr1[i] - arr2[j])) {
                resp = [arr1[i], arr2[j]]
                smallest = Math.abs(resp[0] - resp[1])
            }
            j++
        }

    }
    return resp
}

console.log(
    smallestDifference(arr1, arr2)

)