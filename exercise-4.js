// by Renaldy Pratama

function cariModus(arr) {
  var i = 0;
  var maxIndex = 0;
  var angkaTerbanyak = 0;

  while (i < arr.length) {
    var j = 0;
    var counter = 0;
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        counter++;
      }
      j++;
    }
    if (counter > maxIndex) {
      maxIndex = counter;
      angkaTerbanyak = arr[i];
    }
    i++;
  }
  if (maxIndex === arr.length || maxIndex === 1) {
    return -1;
  } else {
    return angkaTerbanyak;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
