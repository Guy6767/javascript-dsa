"use strict";

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(array) {
  const pivot = array[0];
  const lessThanPivot = array.filter(num => num < pivot);
  const greaterThanPivot = array.filter(num => num > pivot);

  const pivotIndex = lessThanPivot.length;
  const partitionedArray = [...lessThanPivot, pivot, ...greaterThanPivot];

  return [partitionedArray, pivotIndex];
}

function QuickSort(array) {
  if (array.length <= 1) return array;

  const [partitionedArray, pivotIndex] = partition(array);
  const beforePivotArr = QuickSort(partitionedArray.slice(0, pivotIndex));
  const afterPivotArr = QuickSort(partitionedArray.slice(pivotIndex + 1));

  return [...beforePivotArr, partitionedArray[pivotIndex], ...afterPivotArr];
}

console.log(QuickSort([4, 3, 2, 1]));

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

console.log(QuickSort(array));
