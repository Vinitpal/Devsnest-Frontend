// --------- Question 1 ----------

function isArray(e) {
  return Array.isArray(e);
}
// console.log(isArray("w3resource"));
// console.log(isArray([1, 2, 4, 0]));

// --------- Question 2 ----------
function arrayClone(arr) {
  return arr.slice(0);
}
// console.log(arrayClone([1, 2, 4, 0]));
// console.log(arrayClone([1, 2, [4, 0]]));

// --------- Question 3 ----------
function first(arr, n = 1) {
  return n > 0 ? arr.slice(0, n) : [];
}
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// --------- Question 4 ----------
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("+"));

// // --------- Question 5 ----------
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mostfreq = arr1[0];
const freq = arr1.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item]++;
    if (acc[item] > mostfreq) {
      mostfreq = acc[item];
    }
  }
  return acc;
}, {});
for (i in freq) {
  if (freq[i] == mostfreq) {
    console.log(`${i} (${freq[i]} times)`);
  }
}
