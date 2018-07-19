// by Renaldy Pratama

function changeVocals(str) {
  var strSplit = str.split('');
  var i = 0;
  var tempArr = [];

  while (i < strSplit.length) {
    switch(strSplit[i]) {
      case 'a':
        tempArr.push('b');
        break;
      case 'A':
        tempArr.push('B');
        break;
      case 'i':
        tempArr.push('j');
        break;
      case 'I':
        tempArr.push('J');
        break;
      case 'u':
        tempArr.push('v');
        break;
      case 'U':
        tempArr.push('V');
        break;
      case 'e':
        tempArr.push('f');
        break;
      case 'E':
        tempArr.push('F');
        break;
      case 'o':
        tempArr.push('p');
        break;
      case 'O':
        tempArr.push('P');
        break;
      default:
        tempArr.push(strSplit[i]);
        break;
    }
    i++;
  }
  return tempArr;
}

function reverseWord(str) {
  kataBalik = str.reverse();
  return kataBalik;
}

function setLowerUpperCase(str) {
  var i = 0;
  while (i < str.length) {
    if (str[i] === str[i].toLowerCase()) {
        str[i] = str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
        str[i] = str[i].toLowerCase();
    }
    i++;
  }
  return str;
}

function removeSpaces(str) {
  var i = 0;
  var hapusSpasi = [];
  while (i < str.length) {
    if (str[i] !== ' ') {
      hapusSpasi.push(str[i]);
    }
    i++;
  }
  var result = hapusSpasi.join('');
  return result
}

function passwordGenerator(name) {
  if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
      return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))) 
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
