// by Renaldy Pratama

function checkAB(str) {
  var i = 0;

  while (i < str.length) { //barbarian
    if (str[i] === 'a') {
      if (str[i+4] === 'b' || str[i-4] === 'b') {
        return true
      }
    } else if (str[i] === 'b') {
      if (str[i+4] === 'a' || str[i-4] === 'a') {
        return true
      }
    }
    i++;
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false