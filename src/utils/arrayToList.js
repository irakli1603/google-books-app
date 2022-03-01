const arrayToList = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.reduce(
      (accumulator, item, i) =>
        i === 0 ? accumulator + item : `${accumulator}, ${item}`,
      ""
    );
  }
  return "";
};

export default arrayToList;
