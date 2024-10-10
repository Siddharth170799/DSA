// ////push only unique numbers into a new array////

// function check(array) {
//   let new1 = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!new1.includes(array[i])) {
//       new1.push(array[i]);
//     } else {
//       console.log(array[i]);
//     }
//   }
//   return new1;
// }
// console.log(check([1, 2, 2, 1, 3, 4, 5, 6, 7, 8, 8, 9, 9]));

// function check1(array1) {
//   let new2 = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < 5) {
//       new2.push(array1[i]);
//     }
//   }
//   return new2;
// }

// console.log(check1([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function check2(array3) {
//   let new3 = [];

//   for (let i = 0; i < array3.length; i++) {
//     if (array3[i] > 5) {
//       new3.push(array3[i]);
//     }
//   }
//   let sum = 0;
//   for (let j = 0; j < new3.length; j++) {
//     sum = sum + new3[j];
//   }

//   return sum;
// }
// console.log(check2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function check3(array6) {
//   let new5 = [];
//   for (let i = 0; i < array6.length; i++) {
//     if (!new5.includes(array6[i])) {
//       new5.push(array6[i]);
//     }
//   }
//   let total = 1;
//   for (let j = 0; j < new5.length; j++) {
//     total = total * new5[j];
//   }
//   return total;
// }
// console.log(check3([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]));

// /////nested array ///// add all the numbers in the main array////

// function check4(array10) {
//   let sum = 0;
//   for (let i = 0; i < array10.length; i++) {
//     if (Array.isArray(array10[i])) {
//       for (let j = 0; j < array10[i].length; j++) {
//         if (Array.isArray(array10[i][j])) {
//           for (let k = 0; k < array10[i][j].length; k++) {
//             if (Array.isArray(array10[i][j][k])) {
//               for (let l = 0; l < array10[i][j][k].length; l++) {
//                 if (Array.isArray(array10[i][j][k][l])) {
//                   for (let m = 0; m < array10[i][j][k][l].length; m++) {
//                     sum = sum + array10[i][j][k][l][m];
//                   }
//                 } else {
//                   sum = sum + array10[i][j][k][l];
//                 }
//               }
//             } else {
//               sum = sum + array10[i][j][k];
//             }
//           }
//         } else {
//           sum = sum + array10[i][j];
//         }
//       }
//     } else {
//       sum = sum + array10[i];
//     }
//   }
//   return sum;
// }

// console.log(check4([1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]));

// function greatest(array) {
//   let sum = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > sum) {
//       sum = array[i];
//     } else {
//       console.log("hello");
//     }
//   }
//   return sum;
// }
// console.log(greatest([1, 2000, 2, 10, 3, 4, 5]));

// function lowest(array) {
//   let sum = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < sum) {
//       sum = array[i];
//     } else {
//       console.log(array[i]);
//     }
//   }
//   return sum;
// }
// console.log(lowest([1, 0, 4, 3, 2, 1, 5]));

// function checking(array) {
//   let sum = 0;

//   function recursion(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         recursion(arr[i]);
//       } else {
//         sum = sum + arr[i];
//       }
//     }
//   }
//   recursion(array);
//   return sum;
// }

// console.log(checking([1, 2, [1, 2, [3, 4, [5, 6]]]]));


// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// function chex(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//     console.log(array[3]);
//     console.log(array[1]);
//   }
//   return sum;
// }
// console.log(chex([1, 2, 3, 45]));

// function secondlargest(array) {
//   let sum = [];

//   for (let i = 0; i < array.length; i++) {
//     sum.push(array[i]);
//     sum.sort((a, b) => b - a);
//     console.log(sum)
//   }
//   return sum[1];
// }
// console.log(secondlargest([1, 4, 5, 222, 1]));

// let arrays = [1, 2, 3, 4, 5];

// arrays.sort((a, b) => b - a);
// console.log(arrays);

// console.log(arrays[1]);

/// finding the second highest number in the array by using sort method and shift method to remove the first element and  then looping on the new array
//// and then we get the second highest as the highest if we remove the highest element here////

// function filt(arr) {
//   const new1 = arr.sort((a, b) => b - a);
//   new1.shift();
//   let sum = new1[0];
//   // for (let i = 0; i < new1.length; i++) {
//   //   if (arr[i] > sum) {
//   //     sum = arr[i];
//   //   } else {
//   //     console.log(arr[i]);
//   //   }
//   // }
//   return sum;
// }

// console.log(filt([1, 2, 3, 4, 345, 3, 567, 6]));


// const ae = [1,2,30,4,5]
// console.log(ae[1])
// for (let i = 0; i<ae.length;i++){
//   console.log(ae[i])

// }


const array = [{
  name:"siddharth",marks:30,
  name:"deepak",marks:25,
  name:"sumanth",marks:45
}]


array.forEach((item)=>{
  item.marks= item.marks+20
})

console.log(array)

