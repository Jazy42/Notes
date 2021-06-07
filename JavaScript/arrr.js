// Max min Js//

const Arr = [2, 5, 48, 96, 7, 99];

function MaxMin(arr, minmax) {
  if (minmax === "Maximum") {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  } else if (minmax === "Minimum") {
    var min = arr[0];
    for (var j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    return min;
  }
}
console.log(MaxMin(Arr, "Maximum"));
console.log(MaxMin(Arr, "Minimum"));

//Using forEach
//max
const Arr2 = [1, 2, -3, -5, 100000, -100000];
var largest = 0;
Arr2.forEach((element) => {
  if (largest < element) {
    largest = element;
  }
});
console.log(largest);
//min
const Arr2 = [10, 40, 50, 80, 60];
var smallest = 2;
Arr2.forEach((element) => {
  if (smallest > element) {
    smallest = element;
  }
});
console.log(smallest);
