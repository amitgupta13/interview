class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1] || null;
  }
  push(value) {
    this.data.push(value);
    return this.data;
  }
  pop() {
    this.data.pop();
    return this.data;
  }
  //isEmpty
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack);
