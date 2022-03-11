function tweakBookObject(object, isFav = false) {
  const result = {};

  result["id"] = object.id;
  result["isFav"] = isFav;
  result["searchInfo"] = object.searchInfo;
  result["volumeInfo"] = object.volumeInfo;

  return result;
}

export default tweakBookObject;
