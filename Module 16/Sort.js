const name = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Sort the names in ascending order
const sortedNames = name.sort();
console.log("Sorted Names (Ascending):", sortedNames);

// Sort the names in descending order
const sortedNamesDesc = name.sort((a, b) => b.localeCompare(a));
console.log("Sorted Names (Descending):", sortedNamesDesc);


const numbers = [5, 2, 9, 1, 5, 6];
// Sort the numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted Numbers (Ascending):", sortedNumbers);

// Sort the numbers in descending order
const sortedNumbersDesc = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbersDesc);


const sort_Des = [...numbers].sort(function (a, b) { return b - a });
const sort_Asc = [...numbers].sort(function (a, b) { return a - b });
console.log(sort_Asc)
console.log(sort_Des)