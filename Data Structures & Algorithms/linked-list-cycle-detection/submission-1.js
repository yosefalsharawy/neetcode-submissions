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
     * @return {boolean}
     */
    hasCycle(head) {
        // slow and fast pointers 
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(fast === slow){
                return true;
            }
        }
        return false;

        // hashSet solution 
        // let hashSet = new Set();
        // let current = head;
        // while(current){
        //     if(hashSet.has(current)){
        //         return true;
        //     }
        //     hashSet.add(current);
        //     current = current.next
        // }
        // return false;
    }
}
