import Queue from "./Queue.js";

export default function QueueStack() {
  this.inbox = new Queue();
}

QueueStack.prototype.push = function (val) {
  this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function () {
  let size = this.inbox.array.length - 1;
  let counter = 0;
  let bufferQueue = new Queue();

  while (++counter <= size) {
    bufferQueue.enqueue(this.inbox.dequeue());
  }

  let popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
};

