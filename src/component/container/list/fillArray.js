const fillArray = ({ arr, num, targetNum }) => {
  if (arr === undefined) return [];
  let depth = -1;
  const newArr = [];
  for (let i = 0; i < num; i++) {
    if (!(i % targetNum)) {
      depth += 1;
      newArr.push([]);
    }
    newArr[depth].push(arr[i] ? arr[i] : { id: i });
  }
  return newArr;
};

export default fillArray;
