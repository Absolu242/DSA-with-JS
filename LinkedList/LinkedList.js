export default function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

function SingLyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

//Insertion
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SingLyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SingLyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

//Deletion by value

SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;

  if (currentHead.data == value) {
    //just shift the head over. Head is now this new value

    this.head = currentHead.next;
    this.size--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        //remove by skiping
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }

      prev = currentHead;
      currentHead = currentHead.next;
    }

    //if wasn't found in the middle or head, must be tail

    if (currentHead.data == value) {
      prev.next = null;
    }

    this.size--;
  }
};

SinglyLinkedList.prototype.find = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};
