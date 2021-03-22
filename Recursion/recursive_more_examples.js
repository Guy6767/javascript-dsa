function reverse(string) {
  if (string.length == 1) return string;
  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
}

function isPalindrom(string) {
  if (string.length == 1) return true;
  if (string[0] != string[string.length - 1]) return false;
  return isPalindrom(string.slice(1, string.length - 1));
}

function someRecursive(array, callback) {
  if (array.length == 1) return callback(array[0]);
  return callback(array[0]) || someRecursive(array.slice(1), callback);
}

function flatten(array) {
  if (array.length == 0) return [];

  if (Array.isArray(array[0])) {
    // flatten the first element and recursevily the rest of the array
    return [...flatten(array[0]), ...flatten(array.slice(1))];
  } else {
    // the first element is a number
    return [array[0], ...flatten(array.slice(1))];
  }
}

// sums all nested numbers that pass the callback
function nesteCallbackSum(obj, callback) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      sum += nesteCallbackSum(obj[key], callback);
    } else if (typeof obj[key] == "number" && callback(obj[key])) {
      sum += obj[key];
    }
  }
  return sum;
}

function stringifyNumbers(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      stringifyNumbers(obj[key]);
    } else if (typeof obj[key] == "number") {
      obj[key] = new String(obj[key]);
    }
  }
}

function collectStrings(obj) {
  let strings = [];

  for (const key in obj) {
    if (typeof obj[key] == "object") {
      strings = strings.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] == "string") {
      strings.push(obj[key]);
    }
  }

  return strings;
}
