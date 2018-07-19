// by Renaldy Pratama

function tukarBesarKecil(kalimat) {
  var i = 0;
  var result = '';
  
  while (i < kalimat.length) {
    var temp = kalimat[i];
    if (temp === temp.toUpperCase()) {
        temp = temp.toLowerCase();
    } else if (temp === temp.toLowerCase()) {
        temp = temp.toUpperCase();
    }
    result = result + temp;
    i++;
  }
  return result;
}
  
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"