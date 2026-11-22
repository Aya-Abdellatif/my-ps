    reverse() {
        let current = this.head;
        let temp = null;
 
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
 
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
