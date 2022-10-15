/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let node1 = l1
    let node2 = l2 
    let l3 = new ListNode() 
    let curr = l3
    let carry = 0
    while (node1 || node2){
        let sum = carry
        if(node1){
            sum = sum + node1.val
            node1 =node1.next
        }
        if(node2){
            sum = sum + node2.val
            node2 = node2.next
        }
        carry = Math.floor(sum / 10)
        let lastDigit = sum % 10        
        let newNode = new ListNode(lastDigit)
        curr.next = newNode
        curr = curr.next
    }
    if(carry > 0){
       curr.next = new ListNode(carry) 
    }
    
   return l3.next
};