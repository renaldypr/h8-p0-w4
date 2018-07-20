// by Renaldy Pratama

function kaliTerusRekursif(angka) {
  angkaStr = String(angka);
  if (angkaStr.length === 1) {
      return parseInt(angkaStr);
  } else {
      var hasilKali = 1;
      angkaStr.split('');
      for (var i = 0; i < angkaStr.length; i++) {
        hasilKali = hasilKali * angkaStr[i];
      }
    }
  return kaliTerusRekursif(hasilKali)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6