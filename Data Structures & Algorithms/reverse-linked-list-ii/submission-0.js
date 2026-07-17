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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
       let dummy = new ListNode(0,head);
       let currentNode = head;
       let prev = dummy;
       for(let i=1;i<left;i++){
            prev = currentNode;
            currentNode = currentNode.next;
        }
        let leftPointer = prev;
        let times = right-left+1;
        prev = null;
        while(times--){
            let temp = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = temp;
        }
        leftPointer.next.next = currentNode;
        leftPointer.next = prev;
        return dummy.next;
       
    }
}
