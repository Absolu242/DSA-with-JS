import Stack from './Stack.js'

export function sortableStack(size) {
  this.size = size;
  this.mainStack = new Stack();
  this.sortedStack = new Stack();

  //random initialization
  for (let i = 0; i < this.size; i++) {
    this.mainStack.push(Math.floor(Math.random() * 11));
  }
}

sortableStack.prototype.sortStackDescending = function () {
  while (!this.mainStack.isEmpty()) {
    let temp = this.mainStack.pop();
    while (!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) {
      this.mainStack.push(this.sortedStack.pop());
    }
    this.sortedStack.push(temp);
  }
};
