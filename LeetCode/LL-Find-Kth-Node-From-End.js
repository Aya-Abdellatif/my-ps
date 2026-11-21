findKthFromEnd1(k){
        let temp = this.head;
        let length = 0;
        while(temp){
            length++;
            temp=temp.next;
        }
        
        if(k < 0 || k > length){
            return null;
        }
        else if(k === length) return this.head;
        let idx = length - k;
        temp = this.head;
        while(idx--){
            temp = temp.next;
        }
        return temp;
    }


// --------------------------------------------------

findKthFromEnd2(k) {
        let slow = this.head;
        let fast = this.head;
 
        for (let i = 0; i < k; ++i) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }
 
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
 
        return slow;
    }

// Time Complexity: o(n)
// Space Complexity: O(1)
