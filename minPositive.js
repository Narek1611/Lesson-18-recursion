function minPos(arr) {
  let posArr = arr.filter((e) => e >= 0);
  if (posArr.length === 0) {
    return -1;
  }
  let [first, ...rest] = posArr;
  let min = first;
  if (rest[0] < min) {
    min = rest[0];
  }
}
