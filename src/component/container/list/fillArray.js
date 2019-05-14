const fillArray = (arr, num) => {
  if (arr === undefined) return [];
  const checkingArr = [...arr];
  let i = 0;
  while (checkingArr.length < num) {
    checkingArr.push({ _id: i });
    i += 1;
  }
  return checkingArr;
};

export default fillArray;
