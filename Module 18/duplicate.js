const name = [
  "abul",
  "abul",
  "babul",
  "babul",
  "cabul",
  "dabul",
  "dabul",
  "ebul",
  "fabul",
  "gabul",
  "habul",
  "iabul",
  "jabul",
];

function removeDuplicate(names) {
    const uniqueNames = [...new Set(names)];
    return uniqueNames;
}


// function removeDuplicate(names) { 
//     const uniqueNames = [];
//     for (let num of names) { 
//         if (uniqueNames.includes(num) === false) {
//             uniqueNames.push(num)
//         }
//     }
//     return uniqueNames;
// }

const uniqueNames = removeDuplicate(name);
console.log(uniqueNames);

