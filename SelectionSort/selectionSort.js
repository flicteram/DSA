
function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length - 1; i++) {
    min = i;

    for (let j = min + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp
    }
  }
  return arr
}


console.log(selectionSort([8, 7, 5, 1, 3, 6, 2, 4, 10]))