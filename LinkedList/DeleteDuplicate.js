
export function deleteDuplicateInUnsortedSll(sll){
    let track ={}

    let temp = sll.head;
    let prev=null ;

    while(temp){
        if(track[temp.data]){
            prev.next= temp.next;
            sll.size--;
        }else{
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp)
}