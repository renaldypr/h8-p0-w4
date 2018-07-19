function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  if (shoppers[0] === undefined) {
    return [];
  }

  var i = 0;
  var namaSepatu = [];
  var namaBaju = [];
  var namaSweater = [];
  var nama = [namaSepatu, namaBaju, namaSweater];
  var jumlah = [0, 0, 0]; // jumlahSepatu, jumlahBaju, jumlahSweater
  var resultArr = [];

  while (i < shoppers.length) {
    temp = shoppers[i];
    if (temp.product === "Sepatu Stacattu") {
      if (temp.amount <= listBarang[0][2]) {
        namaSepatu.push(temp.name);
        listBarang[0][2] = listBarang[0][2] - temp.amount;
        jumlah[0] = jumlah[0] + temp.amount;
      }
    } else if (temp.product === "Baju Zoro") {
      if (temp.amount <= listBarang[1][2]) {
        namaBaju.push(temp.name);
        listBarang[1][2] = listBarang[1][2] - temp.amount;
        jumlah[1] = jumlah[1] + temp.amount;
      }
    } else if (temp.product === "Sweater Uniklooh") {
      if (temp.amount <= listBarang[2][2]) {
        namaSweater.push(temp.name);
        listBarang[2][2] = listBarang[2][2] - temp.amount;
        jumlah[2] = jumlah[2] + temp.amount;
      }
    } else {
        break;
    }
    i++;
  }
  i = 0;
  while (i < listBarang.length) {
    var tempObj = {
      product: listBarang[i][0],
      shoppers: nama[i],
      leftOver: listBarang[i][2],
      totalProfit: listBarang[i][1] * jumlah[i]
    };
    //console.log(amount)
    resultArr.push(tempObj);

    i++;
  }

  return resultArr;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
