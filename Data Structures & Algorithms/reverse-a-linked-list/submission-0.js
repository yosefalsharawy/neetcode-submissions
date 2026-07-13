/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // 1 -> 16 -> 5 -> 80
		// 1 <- 16 <- 5 <- 80
		let prev = null 
		let current = head; 
		//as long as the second is not null
		while (current) {
			let temp = current.next; // which is 16
			current.next = prev;     // the next of the head now will be null
			prev = current;          //prev now would be the current
			current = temp;          // the current will go to the next node which have been save before
		}
        return prev
    }

}
