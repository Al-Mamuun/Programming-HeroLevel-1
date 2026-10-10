// const fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits[0]); // Apple
// console.log(fruits.length); // 3

// fruits.push("Orange"); // শেষে যোগ
// fruits.pop(); // শেষেরটি বাদ

// fruits.unshift("Grape"); // শুরুতে যোগ
// fruits.shift(); // শুরুরটি বাদ

// ForEach() লুপ ব্যবহার করে অ্যারে প্রদর্শন

// map() ফাংশন ব্যবহার করে নতুন অ্যারে তৈরি করা

// filter() ফাংশন ব্যবহার করে নির্দিষ্ট শর্ত অনুযায়ী নতুন অ্যারে তৈরি করা

// Find() ফাংশন ব্যবহার করে নির্দিষ্ট মান খুঁজে বের করা

// includes() ফাংশন ব্যবহার করে নির্দিষ্ট মান আছে কিনা তা পরীক্ষা করা

// reduce() ফাংশন ব্যবহার করে অ্যারের মানগুলির যোগফল বের করা

// sort() ফাংশন ব্যবহার করে অ্যারের মানগুলিকে সাজানো

// reverse() ফাংশন ব্যবহার করে অ্যারের মানগুলিকে উল্টানো

// slice() ফাংশন ব্যবহার করে অ্যারের একটি অংশ কেটে নেওয়া

// splice() ফাংশন ব্যবহার করে অ্যারের একটি অংশ কেটে নেওয়া এবং নতুন মান যোগ করা

// concat() ফাংশন ব্যবহার করে দুটি বা তার বেশি অ্যারে একত্রিত করা

// join() ফাংশন ব্যবহার করে অ্যারের মানগুলিকে একটি স্ট্রিংয়ে রূপান্তর করা

// split() ফাংশন ব্যবহার করে একটি স্ট্রিংকে অ্যারেতে রূপান্তর করা


const numbers = [10, 15, 16, 20, 25];

const result = numbers.forEach(num => {
    console.log(num)
});

const double = numbers.map(num => num * 2);
console.log(double); // [20, 30, 40, 50]

const evenNumber = numbers.filter(num => num % 2 == 0);
console.log(evenNumber); // [10, 20]

const findNum = numbers.find(num => num > 15);
console.log(findNum); // 20

const includesNum = numbers.includes(25);
console.log(includesNum); // true