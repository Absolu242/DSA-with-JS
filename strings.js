var str = "He's my king from this day until his last day"

var count = 0
var pos = str.indexOf("a")

while (pos !== -1) {
  count++
  pos = str.indexOf("i", pos + 1)
}

console.log(count)
