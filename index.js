// Big O Notation
// Use this to describe the performance of an algorithm
// Helps us determine if an algorithm is scaleable or not.

// Run time complexity
// We want to know how much an algorithm slows down as the input grows larger.

const logArr = (arr) => {
  // O(1) this method will always run in constant time.
  console.log(arr[0]);
};

const logArr2 = (arr) => {
  // O(1) this method will always run in constant time.
  console.log(arr[0]);
  console.log(arr[0]);
};

// This is where size of the input matters.
// O(n) means it takes an amount of time linear with the size of the set, so a set twice the size will take twice the time.
// O(n) would mean that the time it takes to look up an item is proportional to the number of items in the collection.
const logArr3 = (arr) => {
  // Run time complexity of this function is O(1 + n + 1)
  // However you can just write it out as O(n) because the two extra operations don't really mean much if the input is huge.

  console.log(arr[1]); // O(1)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    console.log(arr[i]);
  }
  console.log(arr[1]); // O(1)
};

const logArr4 = (arr) => {
  // What if there are multiple loops?
  // It will be O(n + 2) or O(2n) or really just O(n) as it's still linear growth.
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    // O(n)
    console.log(arr[i]);
  }
};

const logArr5 = (arr) => {
  // O(n * n) or O(n^2)
  // Really slows down if the input gets significantly larger.
  // Algo runs in quadratic time.
  // Every nested loop will increase run time complexity exponentially so it can really slow things down.
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
};
