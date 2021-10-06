export default class Queue {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Queue.prototype.peek = function () {
  return this.array[0];
};

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function queueAccessNthTopNode(queue, n) {
  //n is the position of the alement to access
  let bufferArray = queue.getBuffer();
  if (n <= 0) throw "error";

  let bufferQueue = new queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }

  return bufferQueue.dequeue();
}

function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();

  let bufferQueue = new queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) {
      return true;
    }
  }
  return false;
}

//Real Life example

function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = new Queue();
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
};

Cashier.prototype.deliverOrder = function (customer) {
  let finishedCustomer = this.customers.dequeue();
  return (
    finishedCustomer.name + " , your " + finishedCustomer.order + " is ready!"
  );
};

let cashier = new Cashier();

const ordersList = [
  {
    customer: "Jim",
    product: "Fries",
  },
  {
    customer: "Sammie",
    product: "Burger",
  },
  {
    customer: "Abso",
    product: "Limonade",
  },
];

// ordersList.map((order, i) => {
//   let customer = new Customer(order.customer, order.product);
//   cashier.addOrder(customer);
//   console.log(cashier.deliverOrder());
// });
