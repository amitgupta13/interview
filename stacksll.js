class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return;
  }
  pop() {
    if (this.length === 0) return this;
    this.top = this.top.next;
    if (!this.top) this.bottom = null;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop(3);
myStack.pop(3);
myStack.pop(3);

console.log(JSON.stringify(myStack));

//Discord
//Udemy
//google
