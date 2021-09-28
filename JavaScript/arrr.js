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

// Map
const nums = [2, 5, 48, 90, 1000];
nums.map((num) => {
  return num;
});

const data = [
  {
    name: "Jazy",
    Age: 22,
    height: 5.9,
  },
];

data.map(function (val) {
  console.log(val.name);
});

//forEach

let foods = ["zinger", "chowmein", "salad", "fish"];
foods.forEach(function (food) {
  console.log("I want to eat " + food);
});

// Filter
let foods = ["zinger", "chowmein", "salad", "fish"];
foods.filter(function (food) {
  return food.includes("z");
});

//Find
let foods = ["zinger", "chowmein", "salad", "fish"];
foods.find(function (element) {
  return element.startsWith("z");
});

// Reduce

const Arr3 = [1, 2, -3, -5, 100000, -100000];
sum = Arr3.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
});
console.log(sum);

// Promises
//prob 1

function wait(ms) {
  return new Promise(function (resolve, reject) {
    if (ms <= 0) {
      reject(new Error("cant wait 0 sec"));
      return;
    }

    setTimeout(function () {
      resolve();
    }, ms);
  });
}

wait(1000)
  .then(function () {
    console.log("waited for 1 sec");
  })
  .catch(function (error) {
    console.log(`There is a Error: ${error}`);
  });
//prob 2
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("B cant be zero"));
    }
    resolve(a / b);
  });
}

divide(10, 0)
  .then(function (result) {
    console.log(`Division success ${result}`);
  })
  .catch(function (error) {
    console.log(error);
  });

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}
timeout().then(() => {
  console.log("resolved");
});


function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => {
      if (res.ok) {
        resolve(res.json());
    }else {
    reject(new Error("Thers is an error"))};
      



getData("https://randomuser.me/api/")
  .then((res) => {
    console.log((res));
  })
  .catch((err) => {console.log(err)});
