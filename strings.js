// var str = "He's my king from this day until his last day"

// var count = 0
// var pos = str.indexOf("a")

// while (pos !== -1) {
//   count++
//   pos = str.indexOf("i", pos + 1)
// }

// base64 encoding
// var str = atob("aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0=")
// // btoa("hello I love learning to computer program")

// let result = str //atob(str)

// console.log(result)

/* STRING SHORTNING */

var DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

function encodedId(num) {
  var base = DICTIONARY.length
  var encoded = ""

  if (num === 0) {
    return DISCTIONARY[0]
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base]
    num = Math.floor(num / base)
  }

  return reversedWord(encoded)
}

function reversedWord(str) {
  var reversed = ""
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i)
  }
  return reversed
}

function decodeId(id) {
  var base = DICTIONARY.length
  var decoded = ""

  for (var index = 0; index < id.split("").length; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index))
  }
  return decoded
}

console.log(encodedId(251224633))
console.log(decodeId("rahan"))
