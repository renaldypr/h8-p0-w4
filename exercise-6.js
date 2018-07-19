// by Renaldy Pratama

function hitungHuruf(kata) {
  var kataArr = kata.split(" ");
  var i = 0;
  var k = 0;
  var maxIndex = 0;
  var result;

  while (i < kataArr.length) {
    var kataTemp = kataArr[i].split("");
    kataTemp.sort();
    kataTemp = kataTemp.join(""); //aaeinopsst
    var counter2 = 0;
    var j = 0;
    while (j < kataTemp.length - 1) {
      var k = 0;
      var counter = 0;
      while (k < kataTemp.length - 1) {
        if (kataTemp[j] === kataTemp[k]) {
          counter++;
        }
        k++;
      }
      if (counter > 1) {
        counter2++;
        j = j + counter - 1;
      }
      j++;
    }
    if (counter2 > maxIndex) {
      maxIndex = counter2;
      result = kataArr[i];
    }
    i++;
  }
  if (maxIndex === 0) {
    return -1;
  } else {
    return result;
  }
}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau