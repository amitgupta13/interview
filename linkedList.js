class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: this.tail,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = {
      value,
      next: this.head,
      prev: null,
    };
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const nextNode = leader.next;
    newNode.next = nextNode;
    newNode.prev = leader;
    nextNode.prev = newNode;
    leader.next = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) return this;
    if (index === 0 && this.head.next) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (index === 0 && !this.head.next) {
      this.head = null;
      this.length--;
      return;
    }
    const prev = this.traverseToIndex(index - 1);
    const nodeToBeRemoved = prev.next;
    const next = nodeToBeRemoved.next;
    prev.next = next;
    next && (next.prev = prev);
    this.length--;
    return this;
  }
}

const ll = new LinkedList(10);
// ll.append(24);
// ll.append(2);
// ll.prepend(1);
// ll.append(3);
// ll.insert(1, 123);
// ll.remove(0);
// ll.remove(1);
// ll.remove(0);
console.log(ll.printList(), ll.length);
