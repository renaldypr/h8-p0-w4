// by Renaldy Pratama

function angkaPrima(angka) {
  if (angka <= 1) {
    return false;
  } else if (angka <= 3) {
    return true;
  } else if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }

  var i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false;
    }
    i = i + 6;
  }
  return true;
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false