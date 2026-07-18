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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const arr = [];
        const dummy = new ListNode();
        let currentNode = dummy;
        for(let i = 0;i<lists.length;i++){
            let node = lists[i];
            while(node){
                arr.push(node);
                node = node.next;
            }
        }
        arr.sort((a,b) =>a.val-b.val);
        for(let i=0;i<arr.length;i++){
            currentNode.next = arr[i];
            currentNode = currentNode.next;
        }
        return dummy.next;
    }
}
