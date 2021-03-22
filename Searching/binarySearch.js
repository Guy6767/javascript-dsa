function binarySearch(array, key, callback) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (callback(array[mid]) == key) {
      return mid;
    } else if (callback(array[mid]) > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(
  binarySearch([1, 2, 345, 234234, 657567, 32322343], 657567, num => num)
);

const products = [
  {
    name: "god of war",
    price: 50,
    id: 23424,
  },
  {
    name: "bloodborne",
    price: 50,
    id: 9250423,
  },
  {
    name: "GTA",
    price: 50,
    id: 323,
  },
  {
    name: "Far Cry",
    price: 20,
    id: 7,
  },
  {
    name: "Tomb Raider",
    price: 45,
    id: 222,
  },
];
const id = 23424;
const sortedProducts = products.sort((a, b) => a.id - b.id);
const indexOfProduct = binarySearch(sortedProducts, id, product => product.id);
console.log(sortedProducts[indexOfProduct]);
