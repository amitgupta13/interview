const a = [1, 2, 3, 4, 5, 6, 7];

// console.log([...a.slice(-3), ...a.slice(0, 3 + 1)]);

var rotate = function (nums, k) {
  return [...nums.slice(-k), ...nums.slice(0, k + 1)];
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
