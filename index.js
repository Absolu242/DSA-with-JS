import { LFUCache } from "./Caching/LFUCaching.js";
import SinglyLinkedList from "./LinkedList/LinkedList.js";

var sll1 = new SinglyLinkedList();
//  sll1.insert(1);
//  sll1.insert(2);
//  sll1.insert(7);
//  sll1.insert(2);
//  sll1.insert(8);
//  console.log(sll1)
//  deleteDuplicateInUnsortedSll(sll1)

var myLFU = new LFUCache(5);
myLFU.set(1, 1)
myLFU.set(2, 2)
myLFU.set(3, 3);
myLFU.get(1)
// console.log(myLFU)
// console.log(myLFU.get(1))
// console.log(myLFU.get(1))
// console.log(myLFU.get(1))
// console.log(myLFU.get(1))
// console.log(myLFU)