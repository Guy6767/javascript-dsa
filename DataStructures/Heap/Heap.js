class Heap {
  constructor(A = []) {
    this.data = A;
  }

  static left(parent) {
    return 2 * parent + 1;
  }

  static right(parent) {
    return 2 * parent + 2;
  }

  static parent(child) {
    return Math.floor((child - 1) / 2);
  }

  isEmpty() {
    return this.length == 0;
  }
}

class MinHeap extends Heap {
  constructor(A = []) {
    super(A);
  }

  min() {
    return this.data[0];
  }

  deleteMin() {
    const min = this.data[0];
    this.data[0] = this.data.pop();
    this.fixHeap(0);
    return min;
  }

  insert(data, key) {
    this.data.push({ data, key });

    let i = this.data.length - 1;
    while (i > 0 && this.data[Heap.parent(i)].key > key) {
      this.data[i] = this.data[Heap.parent(i)];
      i = Heap.parent(i);
    }

    this.data[i] = { data, key };
  }

  fixHeap(node) {
    let min = node;
    const left = Heap.left(node);
    const right = Heap.right(node);
    const heapSize = this.data.length;

    if (left < heapSize && this.data[left].key < this.data[node].key)
      min = left;

    if (right < heapSize && this.data[right].key < this.data[min].key)
      min = right;

    if (min != node) {
      const temp = this.data[node];
      this.data[node] = this.data[min];
      this.data[min] = temp;
      this.fixHeap(min);
    }
  }
}

class MaxHeap extends Heap {
  constructor(A = []) {
    super(A);
  }

  max() {
    return this.data[0];
  }

  deleteMax() {
    const max = this.data[0];
    this.data[0] = this.data.pop();
    this.fixHeap(0);
    return max;
  }

  insert(data, key) {
    this.data.push({ data, key });

    let i = this.data.length - 1;
    while (i > 0 && this.data[Heap.parent(i)].key < key) {
      this.data[i] = this.data[Heap.parent(i)];
      i = Heap.parent(i);
    }

    this.data[i] = { data, key };
  }

  fixHeap(node) {
    let max = node;
    const left = Heap.left(node);
    const right = Heap.right(node);
    const heapSize = this.data.length;

    if (left < heapSize && this.data[left].key > this.data[node].key)
      max = left;

    if (right < heapSize && this.data[right].key > this.data[max].key)
      max = right;

    if (max != node) {
      const temp = this.data[node];
      this.data[node] = this.data[max];
      this.data[max] = temp;
      this.fixHeap(max);
    }
  }
}

export { MinHeap, MaxHeap };
