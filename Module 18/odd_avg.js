function oddAvg(arr) {
  let sum = 0;
  let count = 0;

  for (const num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
      sum += num;
      count++;
    }
  }

  const average = sum / count;

  console.log(`The average of odd numbers is: ${average}`);
}

const arr = [10, 15, 20, 25, 30];
const result = oddAvg(arr);


