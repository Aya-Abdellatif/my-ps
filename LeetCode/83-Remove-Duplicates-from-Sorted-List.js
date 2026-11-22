/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    // Two pointers (sorted list)

    // Time Complexity O(n)
    // space Complexity O(1)
    
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    /*
    // Set

    // Time Complexity: O(n)
    // Space Complexity: O(n)

    const values = new Set();

    let previous = null;
    let current = head;

    while (current !== null) {
        if (values.has(current.val)) {
            previous.next = current.next;
        } else {
            values.add(current.val);
            previous = current;
        }
        current = current?.next;
    }*/

    /*
    // Nested loops

    // Time Complexity: O(n)
    // Space Complexity: O(1)

    let current = head;

    while(current){
        let runner = current;
        
        while(runner.next){
            if(runner.next.val === current.val){
                runner.next = runner.next.next;
            }
            else{
                runner = runner.next;
            }
        }

        current = current.next;
    }*/

    return head;
};