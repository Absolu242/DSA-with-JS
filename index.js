import DoublyLinkedList from "./DoublyLinkedList.js";
import SinglyLinkedList from "./LinkedList.js";

var sll1 = new DoublyLinkedList();
 sll1.addAtFront(1);
 sll1.insertAtTail(2);
 sll1.addAtFront(7);
 sll1.findStartingHead(2);
 console.log(sll1)
 console.log(
    sll1.findStartingTail(2))