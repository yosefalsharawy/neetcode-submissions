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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) { 
        let lengthOfList = 0;
		let currentNode = head;
		while (currentNode) {
			currentNode = currentNode.next;
			lengthOfList++;
		}
        let previousNode = head;
        currentNode = head;
        let indexToRemove = lengthOfList - n;
         if (indexToRemove === 0) {
          return head.next;
        }
        let i = 0;
        while(i < indexToRemove){
            previousNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        let removedNode = currentNode;
        previousNode.next = removedNode.next;
        removedNode.next = null;
        return head;
    }
}
