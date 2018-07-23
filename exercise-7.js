// by Renaldy Pratama

function digitPerkalianMinimum(angka) {
  var tempArr = [];
  for (var i = 0; i < 10; i++) {
    if (angka % i === 0) {
      var hasilBagi = angka / i + '';
      var hasilConcat = hasilBagi.concat(i + '');
      tempArr.push(hasilConcat);
    }
  }
  var minCount = 0;
  for (var j = 0; j < tempArr.length; j++) {
    if (minCount === 0) {
        minCount = tempArr[j].length;
    } else if (minCount > tempArr[j].length) {
        minCount = tempArr[j].length;
    }
    j++;
  }
  return minCount;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2