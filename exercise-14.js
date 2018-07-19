// by Renaldy Pratama

function sorting(arrNumber) {
  arrNumber = arrNumber.sort();
  return arrNumber;
}

function getTotal(arrNumber) {
  var i = 0;
  var maxNumber = 0;
  var maxCounter = 0;

  while (i < arrNumber.length) {
    if (arrNumber[i] > maxNumber) {
      var j = 0;
      var counter = 0;
      while (j < arrNumber.length) {
        if (arrNumber[i] === arrNumber[j]) {
          counter++;
        }
        j++;
      }
      maxNumber = arrNumber[i];
      maxCounter = counter;
    }
    i++;
  }
  if (maxCounter === 0) {
      return '';
  } else {
      var result = "angka paling besar adalah " + maxNumber + " dan jumlah kemunculan sebanyak " + maxCounter + " kali";
      return result;
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
