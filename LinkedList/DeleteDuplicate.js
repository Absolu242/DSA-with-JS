
export function deleteDuplicateInUnsortedSll(sll){
    let track =[]

    let temp = sll.head;
    let prev=null ;

    while(temp){
        if(track.indexOf(temp.data) >=0){
            prev.next= temp.next;
            sll.size--;
        }else{
            track.push(temp.data);
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp)
}