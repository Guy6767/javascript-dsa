"use strict";

function Merge(arrOne, arrTwo) {
  const arrThree = Array(arrOne.length + arrTwo.length);
  let i, j, k;

  i = j = k = 0;
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      arrThree[k++] = arrOne[i++];
    } else {
      arrThree[k++] = arrTwo[j++];
    }
  }
  while (i < arrOne.length) {
    arrThree[k++] = arrOne[i++];
  }
  while (j < arrTwo.length) {
    arrThree[k++] = arrTwo[j++];
  }
  return arrThree;
}

function MergeSort(array) {
  if (array.length == 1) return array;

  const mid = Math.floor(array.length / 2);
  const leftSortedArray = MergeSort(array.slice(0, mid));
  const rightSortedArray = MergeSort(array.slice(mid));
  const sortedArray = Merge(leftSortedArray, rightSortedArray);
  return sortedArray;
}

console.log(MergeSort([1, 3, 2, 4]));

const array = [
  3609,
  60861,
  76827,
  59125,
  42664,
  34603,
  95843,
  34437,
  47116,
  83541,
  88367,
  44469,
  54598,
  13284,
  82178,
];

console.log(MergeSort(array));
