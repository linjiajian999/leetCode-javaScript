// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
/**
 * 114. Flatten Binary Tree to Linked List
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  while (root) {
    if (!root.left) {
      root = root.right;
      continue;
    }
    let pre = root.left;
    while (pre.right) {
      pre = pre.right;
    }
    pre.right = root.right;
    root.right = root.left;
    root.left = null;
    root = root.right;
  }
};

var flatten = function (root) {
  if (!root) {
    return root;
  }
  const stack = [];

  while (root.left || root.right || stack.length) {
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      root.right = root.left;
      root.left = null;
    } else {
      root.right = stack.pop();
    }
    root = root.right;
  }
};
