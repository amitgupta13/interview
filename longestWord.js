function LongestWord(sen) {
  const arr = sen.match(/[a-z]+/gi);
  arr.sort((a, b) => b.length - a.length);
  return arr[0];
}

const a = {
  [function () {}]: "abc",
};
