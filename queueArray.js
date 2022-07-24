class Queue {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[0];
  }
  enqueue(value) {
    this.data.push(value);
    return this.data;
  }
  dequeue() {
    this.data.shift();
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
console.log(JSON.stringify(myQueue));

//Joy
//Matt
//Pavel
//Samir
