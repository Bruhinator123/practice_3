//Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  //let x = Math.max(...arr);
  let min = arr[0];
  let max = arr[1];
  let total = 0;
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }
  for (let i = min; i <= max; i++) {
    console.log(i);
    total += i;
  }
  console.log(min, max);
  //console.log("x = ", x);
  return total;
}
console.log(sumAll([10, 5]));

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  newArr = [];
  const x = arr1.concat(arr2);
  for (let index = 0; index < x.length; index++) {
    if (arr1.indexOf(x[index]) == -1 || arr2.indexOf(x[index]) == -1) {
      newArr.push(x[index]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, "ab123"]));

////////////////////////////
function destroyer(arr, ...remove) {
  let x = arr.filter((item) => !remove.includes(item));
  return x;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

////////////////////////
function whatIsInAName(collection, source) {
  const sourceKey = Object.keys(source);

  return collection.filter((item) =>
    sourceKey.every(
      (key) => item.hasOwnProperty(key) && item[key] == source[key]
    )
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

///////////////////////////
function spinalCase(str) {
  // let x = str.toLowerCase().split(" ").join("-");
  // return x;
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
////////////////////////////////////
// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/gi)) {
    return str + "way";
  }
  let unsuz = str.match(/^[^aeiou]+/)[0];
  return str.substring(unsuz.length) + unsuz + "ay";
}

console.log(translatePigLatin("consonant"));

// ///////////
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  let afterx = "";
  if (before[0].toLowerCase() == before[0]) {
    afterx = after[0].toLowerCase().after.slice(1);
  } else {
    afterx = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before, afterx);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// DNA Pairing                        !---**-/-*-*
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let newArray = [];
  for (let index = 0; index < str.length; index++) {
    if (str[index] == "G") {
      newArray.push((str[index] + "C").split(""));
    } else if (str[index] == "C") {
      newArray.push((str[index] + "G").split(""));
    } else if (str[index] == "A") {
      newArray.push((str[index] + "T").split(""));
    } else if (str[index] == "T") {
      newArray.push((str[index] + "A").split(""));
    }
  }
  return newArray;
}

console.log(pairElement("GCA"));

/////////////////////////////      !---**-/-*-*
// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let strLength = str.length;
  allLetters = "abcdefghijklmnopqrstuvwxyz"; //26
  allLettersArray = [];
  if (strLength == 26) {
    return undefined;
  } else {
    for (let index = 0; index < allLetters.length; index++) {
      //console.log(allLetters[index]);
      allLettersArray.push(allLetters[index].split(""));
    }
    return String(allLettersArray[strLength - 1]);
  }
}

console.log(fearNotLetter("abcd"));

///////////////////////////////////////////////////////
// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...arr) {
  let newArray = [].concat(...arr);
  let total = 0;
  let singleArray = [];
  for (let index = 0; index < newArray.length; index++) {
    if (newArray.indexOf(newArray[index] == index)) {
      singleArray.push(newArray[index]);
      total++;
    }
  }
  return total + "    " + singleArray;
}

// return arr.reduce((a, c) => a.concat(c.filter(v => a.indexOf(v) == -1)),[]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

console.log(convertHTML("Dolce & Gabbana"));

///////////////////////////////////////////////
// fiboonacci
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);

////////////////////////////////////////////////////

// sum all primes
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}
sumPrimes(10);
////////////////////////////////////////////////
function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//////////////////////////////////
// Binary Agnet

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function (char) {
      return parseInt(char, 2);
    })
  );
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
/////////////////////////////////////
function truthCheck(collection, pre) {
  let total = 0;
  for (let index = 0; index < collection.length; index++) {
    if (
      collection[index].hasOwnProperty(pre) &&
      Boolean(collection[index][pre])
    ) {
      total++;
    }
  }
  return total == collection.length;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

//////////////////////////////////
// PALINDROME
function palindrome(str) {
  let regex = /[A-Za-z0-9]+/g;
  let x = str.match(regex).join("").toLowerCase();
  return x == x.split("").reverse().join("");
}

console.log(palindrome("Eye"));
