function BinaryTree() {
  this._root = null;
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**PREORDER TRAVERSAL**/
/* root-left-right */

BinaryTree.prototype.traversePreorder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;

    console.log(node.value);
    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
};

BinaryTree.prototype.traversePreOrderIterative = function () {
  //create an empty stack and push root to it
  let nodeStack = [];
  nodeStack.push(this._root);

  // Pop all items one by one. Do following for every popped item
  // a) print it
  // b) push its right child
  // c) push its left child
  // Note that right child is pushed first so that left
  // is processed first */
  while (nodeStack.length) {
    //# Pop the top item from stack and print it
    let node = nodeStack.pop();
    console.log(node.value);

    //# Push right and left children of the popped node to stack

    if (node.right) {
      nodeStack.push(node.right);
    }

    if (node.left) {
      nodeStack.push(node.left);
    }
  }
};

/**IN-ORDER TRAVERSAL**/
/* left-root-right */

BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;

    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.right);
  }
};

BinaryTree.prototype.traverseInOrderIterative = function () {
  let current = this._root,
    s = [],
    done = false;

  while (!done) {
    // Reach the left most Node of the current Node
    if (current != null) {
      // Place pointer to a tree node on the stack
      // before traversing the node's left subtree
      s.push(current);
      current = current.left;
    } else {
      if (s.length) {
        current = s.pop();
        console.log(current.value);
        current = current.right;
      } else {
        done = true;
      }
    }
  }
};

/**POST-ORDER TRAVERSAL**/
/* left-right-root */

BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (node.left) traversePostOrderHelper(node.left);

    if (node.right) traversePostOrderHelper(node.right);

    console.log(node.value);
  }
};

BinaryTree.prototype.traversePostOrderIterative = function () {
  let s1 = [],
    s2 = [];

  // Push root to first stack
  s1.push(this._root);

  //# Run while first stack is not empty
  while (s1.length) {
    // Pop an item from s1 and append it to s2
    let node = s1.pop();
    s2.push(node);

    // Push left and right children of removed item to s1
    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  // Print all elements of second stack
  while (s2.length) {
    let node = s2.pop();
    console.log(node.value);
  }
};

/**LEVEL ORDER TRAVERSAL**/
/*visits each
node level by level */

BinaryTree.prototype.traverseLevelOrder = function () {
  // Breath first search
  let root = this._root,
    queue = [];

  if (!root) return;
  queue.push(root);

  while (queue.length) {
    let temp = queue.shift();
    console.log(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
};
