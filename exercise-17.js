// by Renaldy Pratama

function totalDigitRekursif(angka) {
  if (angka.length < 1) {
    return 0;
  } else {
    var angkaString = String(angka);
    angkaString = angkaString.split("");
    var digitPertama = parseInt(angkaString[0]);
    angkaString.shift();
  }
  return digitPertama + totalDigitRekursif(angkaString.join(""));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
