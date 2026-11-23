/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let d1 = new ListNode(0);
    let d2 = new ListNode(0);
        
    let prev1 = d1;
    let prev2 = d2;
        
    while(head){
        if(head.val < x){
            prev1.next = head;
            prev1 = prev1.next;
        }else{
            prev2.next = head;
            prev2 = prev2.next;
        }
        head = head.next;
    }
    
    prev2.next = null;        
    prev1.next = d2.next;
    head = d1.next;
    
    return head;        
};