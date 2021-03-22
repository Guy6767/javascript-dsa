import { BinaryTreeNode } from "./BinaryTree.js";
import { Queue } from "../Queue/Queue.js";

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(data, key, left = null, right = null) {
    super(data, left, right);
    this.key = key;
  }

  inorder() {
    if (this.left) this.left.inorder();
    console.log(this.data);
    if (this.right) this.right.inorder();
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  inorder() {
    if (this.root) this.root.inorder();
  }

  BFS() {
    const Q = new Queue();
    const nodes = [];

    Q.enqueue(this.root);
    while (!Q.isEmpty()) {
      const node = Q.dequeue();
      if (node.left) Q.enqueue(node.left);
      if (node.right) Q.enqueue(node.right);
      nodes.push(node.data);
    }

    return nodes;
  }

  find(key) {
    let temp = this.root;
    while (temp) {
      if (key == temp.key) return temp.data;
      else if (key < temp.key) temp = temp.left;
      else temp = temp.right;
    }
    return null;
  }

  insert(data, key) {
    let temp = this.root;
    let parent = null;

    while (temp) {
      parent = temp;
      if (key < temp.key) temp = temp.left;
      else temp = temp.right;
    }

    let newNode = new BinarySearchTreeNode(data, key);
    if (!parent) this.root = newNode;
    else if (key < parent.key) parent.left = newNode;
    else parent.right = newNode;
  }
}

export { BinarySearchTree };
