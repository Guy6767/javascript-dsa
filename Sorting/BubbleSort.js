"use strict";

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function BubbleSort(arr) {
  let isSorted = false;
  for (let i = 0; i < arr.length && !isSorted; i++) {
    isSorted = true;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
        isSorted = false;
      }
    }
  }
}

const array = [234, 234, 24, 12, 353, 45353];
BubbleSort(array);
console.log(array);
