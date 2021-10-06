import { deleteDuplicateInUnsortedSll } from "./LinkedList/DeleteDuplicate.js";
import SinglyLinkedList from "./LinkedList/LinkedList.js";

var sll1 = new SinglyLinkedList();
 sll1.insert(1);
 sll1.insert(2);
 sll1.insert(7);
 sll1.insert(2);
 sll1.insert(8);
 console.log(sll1)
 deleteDuplicateInUnsortedSll(sll1)

