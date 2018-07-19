// by Renaldy Pratama

function shoppingTime(memberId, money) {
  var barang = [
    "Sepatu Stacattu",
    "Baju Zoro",
    "Baju H&N",
    "Sweater Uniklooh",
    "Casing Handphone"
  ];
  var harga = [1500000, 500000, 250000, 175000, 50000];
  var cart = [];
  var uangSisa = money;

  if (memberId === "" || memberId === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  var displayObj = {
    memberId: memberId,
    money: money,
    listPurchased: cart
  };

  if (uangSisa >= 1500000) {
    cart.push(barang[0]);
    uangSisa = uangSisa - harga[0];
  }
  if (uangSisa >= 500000) {
    cart.push(barang[1]);
    uangSisa = uangSisa - harga[1];
  }
  if (uangSisa >= 250000) {
    cart.push(barang[2]);
    uangSisa = uangSisa - harga[2];
  }
  if (uangSisa >= 175000) {
    cart.push(barang[3]);
    uangSisa = uangSisa - harga[3];
  }
  if (uangSisa >= 50000) {
    cart.push(barang[4]);
    uangSisa = uangSisa - harga[4];
  }

  displayObj.changeMoney = uangSisa;

  return displayObj;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
