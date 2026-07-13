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
        let hashSet = new Set();
        let current = head;
        while(current){
            if(hashSet.has(current)){
                return true;
            }
            hashSet.add(current);
            current = current.next
        }
        return false;
    }
}
