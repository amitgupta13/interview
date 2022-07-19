var containsDuplicate = function (nums) {
  const obj = {};
  let hasDup = false;
  nums.forEach((item) => {
    if (obj[item] || obj[item] === 0) return (hasDup = true);
    obj[item] = item;
  });

  return hasDup;
};
