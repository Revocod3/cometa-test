// The time complexity of the above algorithm in terms of Big O notation is O(n)
// This version is more readable.

const isPalindromeOne = (str) => {
  const cleanStr = str.replace(/[^A-Za-z0-9]/gi, "");
  let reversed = "";
  for (let i = cleanStr.length; i > 0; i--) {
    reversed += cleanStr.toLowerCase()[i - 1];
  }
  return reversed === cleanStr.toLowerCase();
};

// The time complexity of the above algorithm in terms of Big O notation is O(n)
// This version is faster.

const isPalindromeTwo = (str) => {
  const cleanStr = str.replace(/[^A-Za-z0-9]/gi, "");
  return (
    cleanStr.toLowerCase().split``.reverse().join`` === cleanStr.toLowerCase()
  );
};

// The time complexity for the first version of this function
// In terms of Big O notation we could agree that it's O(n²)
// And the space complexity of the this function is O(1)

const repeatedLetterOne = (str) =>
  str.split``.filter((e, i, a) => a.indexOf(e) !== i)[0] || null;

// The time complexity for the second version of this function
// In terms of Big O notation we could agree that it's O(n)
// And the space complexity of the this function is O(n)

const repeatedLetterTwo = (str) => {
  if (!/(.).*?\1/.test(str)) return null;

  let h = new Set();
  for (let i = 0; i <= str.length - 1; i++) {
    let c = str[i];
    if (h.has(c)) {
      return c;
    } else {
      h.add(c);
    }
  }
};

// The first algorithm is more efficient in terms of space and
// could work for specific cases where we want to return not only
// the first repeated letter but another position, but in terms of time
// its scaling is inefficient compared to the second algorithm,
// because although the space complexity is slightly lower,
// its efficiency in terms of time complexity is quite reasonable,
// since it was inspired by "Memoization", when we think of scaling it is an
// algorithm that will remain efficient in terms of time.

// In conclusion, I would prefer to use the second algorithm
// when I need to handle large amounts of data,
// but the first one for its simplicity I would not discard it,
// and in fact I would use it if I am sure that the scaling would be controlled.
