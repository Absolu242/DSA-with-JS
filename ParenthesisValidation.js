import Stack from "./Stack.js";

export function isParenthesisValid(validString) {
  let stack = new Stack();

  for (let pos = 0; pos < validString.length; pos++) {
    let currentChar = validString.charAt(pos);
    if (currentChar == "(") {
      stack.push(currentChar);
    } else if (currentChar == ")") {
      if (stack.isEmpty()) return false;

      stack.pop();
    }
  }

  return stack.isEmpty();
}


