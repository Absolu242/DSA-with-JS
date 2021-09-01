/*FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER */

function findSumBetter(arr, weight) {
  var hashtable = {}

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i]
    var difference = weight - currentElement

    //check if the right one already exist
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight - currentElement]]
    } else {
      //store index
      hashtable[difference] = i
    }
  }
  return -1
}

// arr = [1, 2, 3, 4, 5]
// weight = 9

// console.log(findSumBetter(arr, weight))

/*IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH */

function arraySlice(array, beginIndex, endIndex) {
  //if ni params passed , return the array

  if (!beginIndex && !endIndex) {
    return array
  }

  //if only begining index is found , set endIndex to size

  if (!endIndex) endIndex = array.length

  var partArray = []

  //if both begin and end index specified return the part of the array

  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i])
  }
  return partArray
}

/*FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE*/

function medianOfArray(array) {
  var length = array.length

  //odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)]
  } else {
    //even
    return (array[length / 2] + array[length / 2 - 1]) / 2
  }
}

function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2
  }

  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2
  }

  var median1 = medianOfArray(arr1),
    median2 = medianOfArray(arr2)

  if (median1 == median2) {
    return median1
  }

  var evenOffset = pos % 2 == 0 ? 1 : 0,
    offsetMinus = Math.floor(pos / 2) - evenOffset,
    offsetPlus = Math.floor(pos / 2) + evenOffset

  if (median1 < median2) {
    return medianOfTwoSortedArray(
      arr1.slice(offsetMinus),
      arr2.slice(offsetMinus),
      offsetPlus
    )
  } else {
    return medianOfTwoSortedArray(
      arr2.slice(offsetMinus),
      arr1.slice(offsetMinus),
      offsetPlus
    )
  }
}

/*FIND COMMON ELEMENTS IN K-SORTED ARRAYS 

Time Complexity: O(kn)
Space Complexity: O(n)
*/

function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = []

  for (i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i]
    last = null

    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j]

      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1
        } else {
          hashmap[currentElement]++
        }
      }
      last = currentElement
    }
  }

  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop))
    }
  }
  return answer
}

result = commonElements([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2],
])
console.log(result)
