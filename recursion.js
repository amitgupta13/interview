let counter = 0;

function a() {
  debugger;
  if (counter > 3) return "done";
  counter++;
  return a();
}

console.log(a());
