/* PRINT ALL PERMUTATIONS OF AN ARRAY 
Time Complexity: O(n!)
Space Complexity: O(n!)
*/

function swap(strArr, index1, index2) {
  var temp = strArr[index1]
  strArr[index1] = strArr[index2]
  strArr[index2] = temp
}

function permute(strArr, begin, end) {
  if (begin == end) {
    console.log(strArr)
  } else {
    for (var i = begin; i < end + 1; i++) {
      swap(strArr, begin, i)
      permute(strArr, begin + 1, end)
      swap(strArr, begin, i)
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1)
}

// console.log(permuteArray(["A", "B", "C"]))

/*WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME 

Time Complexity: O(n)
Space Complexity: O(n)

*/

function isPalindromeRecursive(word) {
  return isPalindromeHelper(word, 0, word.length - 1)
}

function isPalindromeHelper(word, beginPos, endPos) {
  if (beginPos == endPos) {
    return true
  }
  if (word.charAt(beginPos) != word.charAt(endPos)) {
    return false
  } else {
    return isPalindromeHelper(word, beginPos + 1, endPos - 1)
  }
}

// console.log(isPalindromeRecursive("aibohphobia"))
// console.log(isPalindromeRecursive("racecar"))
