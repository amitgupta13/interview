let a = 0;

setTimeout(() => {
  a = 1;
}, 2000);

while (true) {
  console.log(a);
  if (a === 1) return;
}
