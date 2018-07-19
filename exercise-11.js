// by Renaldy Pratama

function changeMe(arr) {
  if (arr[0] === undefined) {
    console.log('');
  } else {
    var i = 0;
    var nomor = 1;
    while (i < arr.length) {
      var biodataObj = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 2018 - arr[i][3]
      };
      if (arr[i][3] === undefined || biodataObj.age < 0) {
        biodataObj.age = "Invalid Birth Year";
      }
      console.log(
        nomor + ". " + biodataObj.firstName + " " + biodataObj.lastName
      );
      console.log(biodataObj);
      i++;
      nomor++;
    }
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
