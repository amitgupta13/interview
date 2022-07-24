setImmediate(() => console.log("setimmediate"));
setImmediate(() => console.log("setimmediate"));
setImmediate(() => console.log("setimmediate"));
setImmediate(() => console.log("setimmediate"));
const interval = setInterval(() => console.log("setInter"), 5000);
setTimeout(() => {
  clearInterval(interval);
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  console.log("abc");
});
