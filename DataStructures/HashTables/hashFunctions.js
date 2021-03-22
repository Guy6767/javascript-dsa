const UNICODE_BASE = 1111998;

const convertUniCodeToDecimal = (char, index) => {
  return char.charCodeAt(0) * Math.pow(UNICODE_BASE, index);
};

function hash(key, M, maxIterations = 100) {
  const keyStr = key.toString();
  let total = 0;
  for (let i = 0; i < Math.min(keyStr.length, maxIterations); i++) {
    total += convertUniCodeToDecimal(keyStr[i], i);
  }
  return total % M;
}

export { hash };
