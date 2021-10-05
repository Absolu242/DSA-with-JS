export default class Stack {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Stack.prototype.push = function (item) {
  this.array.push(item);
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

Stack.prototype.pop = function () {
  return this.array.pop();
};


function stackAccessNthTopNode(stack, n) {
  //n is the position of the alement to access
  let bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";

  let bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }

  return bufferStack.pop();
}

function stackSearch(stack, element) {
  var bufferArray = stack.getBuffer();

  let bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) {
      return true;
    }
  }
  return false;
}

let stack = new Stack();
stack.push(19);
stack.push(5);
stack.push(9);
//   console.log(stack);
//   console.log(stack.peek());
//   console.log(stack.pop());
//   console.log(stack);

// console.log(stackAccessNthTopNode(stack, 1));
// console.log(stackSearch(stack, 9));
