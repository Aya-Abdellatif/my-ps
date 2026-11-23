partitionList(x) {
        // If the list is empty, there's nothing to partition
        if (!this.head) return;
    
        // Create two dummy nodes for two partitions
        const dummy1 = new Node(0); // for nodes < x
        const dummy2 = new Node(0); // for nodes >= x
    
        // Pointers to build each new list
        let prev1 = dummy1;
        let prev2 = dummy2;
    
        // Start from the head of the original list
        let current = this.head;
    
        // Traverse the original list
        while (current !== null) {
            // Save the next node before detaching
            const nextNode = current.next;
    
            // Disconnect current node from original list
            current.next = null;
            current.prev = null;
    
            // If value is less than x, add to first list
            if (current.value < x) {
                prev1.next = current;
                current.prev = prev1;
                prev1 = current;
            } 
            // Otherwise, add to second list
            else {
                prev2.next = current;
                current.prev = prev2;
                prev2 = current;
            }
    
            // Move to the next node
            current = nextNode;
        }
    
        // Terminate the second list
        prev2.next = null;
    
        // Combine both lists
        prev1.next = dummy2.next;
        if (dummy2.next) {
            dummy2.next.prev = prev1;
        }
    
        // Set the new head of the combined list
        this.head = dummy1.next;
    
        // Ensure the head has no prev pointer
        if (this.head) {
            this.head.prev = null;
        }
    }
