function maxSum(arr) {
  let a1 = 0;
  let a2 = arr[0];
  arr.forEach((i, a) => {
    a1 = Math.max(i, a1 + i);
    a2 = Math.max(a2, a1);
  });
  return a2;
}

var maxSubArray = function (nums) {
  let solution = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
    console.log(nums);
  }

  return solution;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-1]));
// console.log(maxSubArray([-1, -2]));
