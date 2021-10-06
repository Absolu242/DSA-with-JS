import Stack from "./Stack.js";

export default function TwoStackQueue() {
    this.inbox=new Stack()
    this.outbox = new Stack()
    
}

TwoStackQueue.prototype.enqueue = function(val){
    this.inbox.push(val)
}

TwoStackQueue.prototype.dequeue = function(){
    if(this.outbox.isEmpty()){
        while(!this.inbox.isEmpty()){
            this.outbox.push(this.inbox.pop())
        }
    }
    return this.outbox.pop();
}