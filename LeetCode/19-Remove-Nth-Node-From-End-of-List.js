/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    for(let i = 0; i < n; i++){
        //  If fast becomes null before reaching n steps, it means the linked list has fewer than n nodes
        if(!fast) return null

        fast = fast.next;
    }

    // Removing the head if fast becomes null after the first loop.
    if (!fast) return head.next;

    while(fast?.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next?.next;
    
    return head;

};


// Time complexity: O(L) — Where is the length of the linked list. We traverse the list exactly once.
// Space complexity: O(1) — We only use two additional pointers regardless of the list size.
