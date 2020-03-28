/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var res = 0;
  var left = 0;
  var right = height.length - 1;
  var temRes = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      temRes = (right - left) * height[left];
      left++;
    } else {
      temRes = (right - left) * height[right];
      right--;
    }
    res = Math.max(res, temRes);
  }
  return res;
};