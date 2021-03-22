class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  inorder() {
    if (this.left) this.left.inorder();
    console.log(this.data);
    if (this.right) this.right.inorder();
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inorder() {
    if (this.root) this.root.inorder();
  }
}

export { BinaryTree, BinaryTreeNode };
