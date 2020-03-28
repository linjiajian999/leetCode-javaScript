/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {

  let tag = 0;
  const res = new ListNode();

  let currentNode = res;
  let currentVal = 0;

  while (currentNode) {
    currentVal = tag;
    if (l1) {
      currentVal += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      currentVal += l2.val;
      l2 = l2.next;
    }

    currentNode.val = currentVal % 10;
    tag = parseInt(currentVal / 10);

    if (l1 || l2) {
      currentNode.next = new ListNode();
    } else {
      currentNode.next = tag ? new ListNode(1) : null;
    }
    currentNode = currentNode.next;
  }

  return res;
};

function createList(array) {
  const res = new ListNode()
  array.reduce((pre, val, index, array) => {
    pre.val = val;
    const next = index === array.length - 1 ? null : new ListNode();
    pre.next = next;

    return next
  }, res);
  return res;
}
function logList(list) {
  let str = '';
  let node = list;
  while (node) {
    str += `${node.val} -> `
    node = node.next;
  }
  return str;
}

function test1() {
  const l1 = createList([2, 4, 5]);
  const l2 = createList([5, 6, 4])
  const res = addTwoNumbers(l1, l2);

  console.log(logList(l1));
  console.log(logList(l2));
  console.log(logList(res));

  console.log('res', l1, l2, res)
}

function test2() {
  const l1 = createList([2, 4, 3]);
  const l2 = createList([5, 6, 4])
  const res = addTwoNumbers(l1, l2);

  console.log(logList(l1));
  console.log(logList(l2));
  console.log(logList(res));

  console.log('res', l1, l2, res)
}

test1();
test2();