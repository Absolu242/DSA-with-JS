export function reversals(head, m, n) {
  let currentNode = head;
  let position = 1;
  let start = head;

  while (position < m) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  let tail = currentNode;
  let listSofar = null;

  while (position >= m && position <= n) {
    const next = currentNode.next;
    currentNode.next = listSofar;
    listSofar = currentNode;
    currentNode = next;
    position++;
  }

  start.next = listSofar;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return listSofar;
  }
}
