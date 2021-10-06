function reverseSingleLinkedList(sll) {
  let node = sll.head;
  let prev = null;

  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    if (!temp) {
      break;
    }
    node = temp;
  }
  return node;
}
