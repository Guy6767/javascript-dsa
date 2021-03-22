function paddNumbers(array) {
  const biggestNumber = array.reduce((biggestNum, currentNum) => {
    return currentNum > biggestNum ? currentNum : biggestNum;
  });

  const width = biggestNumber.toString().length;
  const paddedArray = array.map(num => {
    const numStr = num.toString();
    const padding = Array(width - numStr.length)
      .fill(0)
      .join("");
    return padding + numStr;
  });

  return [paddedArray, width];
}

const array = [120, 12, 6, 36, 70, 3];

function RadixSort(array) {
  let buckets = [[], [], [], [], [], [], [], [], [], []];
  let [paddedArray, width] = paddNumbers(array);

  for (let i = width - 1; i >= 0; i--) {
    for (const number of paddedArray) {
      const ithDigit = Number(number[i]);
      buckets[ithDigit].push(number);
    }

    paddedArray = buckets.flat();
    buckets = buckets.map(() => []);
  }

  return paddedArray.map(numStr => Number(numStr));
}

console.log(RadixSort(array));
