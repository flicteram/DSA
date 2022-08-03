function merge(arr1, arr2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i])
            i++
        } else {
            combined.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        combined.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        combined.push(arr2[j])
        j++
    }
    return combined
}



function mergeSort(array) {
    console.log(array)
    if (array.length === 1) {
        return array;
    }
    const half = Math.floor(array.length / 2);
    const left = array.slice(0, half);
    const right = array.slice(half)
    return merge(mergeSort(left), mergeSort(right))

}

console.log(mergeSort([1, 5, 3, 2, 6, 4, 8, 9]))