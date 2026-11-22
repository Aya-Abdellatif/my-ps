isPalindrome(){
        let left = this.head;
        let right = this.tail;
        
        for(let i = 0; i < this.length / 2; i++){
          if(left.value !== right.value){
            return false;
          }
                
          left = left.next;
          right = right.prev;
        }
        
        return true;
    }
