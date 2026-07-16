// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map();
        let currentNode = head;
        while(currentNode) {
            let newNode = new Node(currentNode.val);
            map.set(currentNode,newNode)
            currentNode = currentNode.next;
        }
        currentNode = head;
        if(!head){
            return head
        }
        while(currentNode){
            let copy = map.get(currentNode);
            if(currentNode.next){
                 copy.next = map.get(currentNode.next);
            }
            if(currentNode.random){
                  copy.random = map.get(currentNode.random);
            }
            currentNode = currentNode.next
        }
        return map.get(head);
    }
}
