/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }
  return s(root.left, root.right);
};

function s(left, right) {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  return left.val === right.val && s(left.right, right.left) && s(left.left, right.right);
}