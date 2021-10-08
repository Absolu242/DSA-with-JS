import { LFUCache } from "./Caching/LFUCaching.js";
import SinglyLinkedList from "./LinkedList/LinkedList.js";
import { reversals } from "./LinkedList/m-n-reversals.js";


var sll1 = new SinglyLinkedList();
 sll1.insert(1);
 sll1.insert(2);
 sll1.insert(3);
 
 console.log(sll1)
 sll1.insert(4);
 sll1.insert(5);
 console.log(sll1)
//console.log(reversals(sll1,3,5))


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