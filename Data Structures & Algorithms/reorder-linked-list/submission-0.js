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
     * @return {void}
     */
    reorderList(head) {
        let list = [];
        let current = head;
        while(current){
            list.push(current);
            current = current.next;
        }
        current = head;
        let left = 0;
        let right = list.length - 1;
        while(left<right){
            list[left].next = list[right];
            left++;
            if(left === right){
                break;
            }
            list[right].next = list[left];
            right--;
        }
        list[left].next = null;
        return head;
    }
}
