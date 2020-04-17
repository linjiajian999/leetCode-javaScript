/**
 * https://leetcode.com/problems/path-sum/
 * 112. Path Sum
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false;
  }
  sum = sum - root.val;
  if (root.left === null && root.right === null) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
