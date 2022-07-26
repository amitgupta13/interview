const mergeSortedArrays = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

const mergeSortedArrays2 = (arr1, arr2) => {
  if (!arr1 && !arr2) return [];
  if (!arr1 || arr1.length === 0) return arr2;
  if (!arr2 || arr2.length === 0) return arr1;
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30, 23, 54]));
