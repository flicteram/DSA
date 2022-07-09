function sortArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; i > j; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

console.log(sortArr([0, 4, 5, 6, 1, 2, 7, 3, 8])) // [0,1,2,3,4,5,6,7,8]