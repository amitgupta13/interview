function findFactorialRecursive(number) {
  if (number === 2) return number;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while (number > 1) {
    answer *= number;
    number--;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
