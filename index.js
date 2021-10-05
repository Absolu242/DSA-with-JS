import { isParenthesisValid } from "./ParenthesisValidation.js";
import QueueStack from "./QueueStack.js";
import { sortableStack } from "./sortableStack.js";
import TwoStackQueue from "./TwoStackQueue.js";


var ss = new sortableStack(10);
console.log(ss);

ss.sortStackDescending();
console.log(ss.sortedStack);