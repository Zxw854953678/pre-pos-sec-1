function collect_same_elements(collection_a, collection_b) {
  var equalArray = [];

  collection_a.forEach(function (element) {
    if (isEqual(element, collection_b)) {
      equalArray.push(element);
    }
  });

  return equalArray;
}

function isEqual(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (element === collection[i]) {
      return true;
    }
  }
}

module.exports = collect_same_elements;
