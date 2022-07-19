const twoSum = function (nums, target) {
  const indices = new Set();
  const obj = nums.reduce((acc, item, index) => {
    acc[item] = index;
    return acc;
  }, {});

  nums.forEach((item, index) => {
    const diff = target - item;
    if (obj[diff] && obj[diff] !== index) {
      indices.add(obj[diff]);
      indices.add(index);
    }
  });

  return [...indices];
};

const twoSum2 = function (nums, target) {
  const indices = [];
  const obj = nums.reduce((acc, item, index) => {
    acc[item] = index;
    return acc;
  }, {});

  nums.forEach((item, index) => {
    if (indices.length >= 2) return;
    const diff = target - item;
    if (obj[diff] && obj[diff] !== index) {
      indices.push(obj[diff]);
      indices.push(index);
    }
  });

  return indices;
};
