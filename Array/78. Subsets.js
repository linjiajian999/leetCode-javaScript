/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const temArr = []
  let end = 0
  for (let i = 0; i < nums.length; i++) {
    let temEnd = end
    for (let j = 0; j < end; j++) {
      const tem = Array.from(temArr[j]);
      tem.push(nums[i])
      temArr.push(tem)
      temEnd++
    }
    temEnd++
    temArr.push([nums[i]])
    end = temEnd
  }
  temArr.push([])
  return temArr
};
// back tracking
var subsets2 = function(nums) {
  let res = []
  let temArr = []
  backTracking(res, nums, temArr, 0)
  return res
};
var backTracking = function(res, nums, temArr, index) {
  res.push(Array.from(temArr));
  for (let i = index; i < nums.length; i++) {
    temArr.push(nums[i]);
    backTracking(res, nums, temArr, i+1);
    temArr.pop();
  }
}
