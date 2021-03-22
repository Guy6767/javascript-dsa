import { hash } from "./hashFunctions.js";
import { DoublyLinkedList as List } from "../LinkedLists/DoublyLinkedList.js";

class HashTableOpenAddressing {
  constructor(size = 101) {
    if (size % 2 == 0) size++;
    this.keyMap = new Array(size);
  }

  set(key, value) {
    // calculate the hash by the key
    const index = hash(key, this.keyMap.length);
    // if the array cell is empty, create a new list
    if (!this.keyMap[index]) this.keyMap[index] = new List();
    // append the key-value pair to the list
    this.keyMap[index].append({ key, value });
  }

  get(key) {
    // calculate the hash by the key
    const index = hash(key, this.keyMap.length);
    if (this.keyMap[index]) {
      // find the key-value pair in the list
      const keyValue = this.keyMap[index].find(key, node => node.key);
      // return the value of the key-value pair
      return keyValue.value;
    }
    return null;
  }

  keys() {
    const keys = [];
    this.keyMap.forEach(list => {
      for (const { key, value } of list) {
        keys.push(key);
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.keyMap.forEach(list => {
      for (const { key, value } of list) {
        values.push(value);
      }
    });
    return values;
  }
}

class HashTableCloseAddressing {
  constructor(size, type = "linear-proabing") {
    if (!size) size = 101;
    else if (size % 2 == 0) size++;
    this.keyMap = new Array(size);
    this.type = type;
  }

  set(key, value) {
    // calculate the hash by the key
    let index = hash(key, this.keyMap.length);
    // proab by type
    if (this.type == "linearProbing") {
      index = this.linearProbing(index);
    } else {
      index = this.quadraticProbing(index);
    }
    // set the key-value pair
    this.keyMap[index] = { key, value };
  }

  linearProbing(index) {
    while (this.keyMap[index]) {
      index = (index + 1) % this.keyMap.length;
    }
    return index;
  }

  quadraticProbing(index) {
    let i = 1;
    while (this.keyMap[index]) {
      index = (index + i + i * i) % this.keyMap.length;
      i++;
    }
    return index;
  }

  get(key) {
    // calculate the hash by the key
    const index = hash(key, this.keyMap.length);
    return this.keyMap[index];
  }

  keys() {
    return this.keyMap.filter(item => item).map(({ key, value }) => key);
  }

  values() {
    return this.keyMap.filter(item => item).map(({ key, value }) => value);
  }
}

export { HashTableOpenAddressing, HashTableCloseAddressing };
