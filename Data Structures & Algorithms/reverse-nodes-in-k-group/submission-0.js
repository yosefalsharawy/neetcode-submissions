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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0,head);
        let groupPrev = dummy;
        
        while(true){
            // head=[1, 2, 3, 4, 5]
            const kthNode =this.getKthNode(groupPrev,k) // 2
            if(!kthNode){
                break;
            }
            const groupNext = kthNode.next; // 3
            
            // reversing part
            // head=[1, 2, 3, 4, 5]
            let prev = kthNode.next; // 3  
            let currentNode = groupPrev.next; // 1
            while(currentNode != groupNext){ // 1!=3   // 2!=3
                let temp = currentNode.next; // 2  // 3
                currentNode.next = prev;  //1->3  // 2->1
                prev = currentNode;  // 1  //2
                currentNode = temp;  // 2  //3
            }
            let temp = groupPrev.next; // 1
            groupPrev.next = kthNode;   // 1 -> 3
            groupPrev = temp; // 1
        }

        return dummy.next;
    }

    getKthNode(currentNode,k){
        while(currentNode && k>0){
            currentNode = currentNode.next;
            k--;
        }
        return currentNode;
    }
}
